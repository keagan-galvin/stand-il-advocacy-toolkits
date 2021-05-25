var express = require("express");
var router = express.Router();
var multer = require("multer");
var fs = require("fs");
var csv = require("csv-parser");
const { Parser } = require("json2csv");
const { promisify } = require("util");
const unlinkAsync = promisify(fs.unlink);

const datasets = require("../application/datasets");
const security = require("../infrastructure/security");

var upload = multer({ dest: "uploads/" });

// GET ALL
router.get("/", security.isAdmin, function (req, res) {
  return res.successResponse(datasets.getAll());
});

// Get Data
router.get("/:key", async function (req, res) {
  let dataset = datasets.get(req.params.key);
  if (!dataset) return res.errorResponse("Invalid key!");

  try {
    let results = await datasets.getData(req.params.key, req.query);
    res.successResponse(results);
  } catch (e) {
    console.log(e);
    return res.errorResponse("Unexpected error occured while retrieving data.");
  }
});

// Refresh Data
router.post(
  "/upload",
  [security.isAdmin, upload.single("data_set")],
  async function (req, res) {
    let dataset = datasets.get(req.body.key);
    if (!dataset) return res.errorResponse("Invalid key!");

    let results = [];
    let errors = [];

    let rowIndex = 0;

    try {
      await fs
        .createReadStream(req.file.path, "utf8")
        .pipe(csv())
        .on("data", (data) => {
          let validationResult = dataset.validate(data);

          if (validationResult.valid) {
            results.push(dataset.transform(data));
          } else {
            errors.push({
              rowIndex,
              errors: validationResult.errors,
            });
          }

          rowIndex++;
        });

      await unlinkAsync(req.file.path);

      if (!dataset.skipOnError && errors.length > 0)
        return res.errorResponse("File errors found.", errors);

      try {
        await datasets.refresh(req.body.key, results);
        return res.successResponse("success");
      } catch (e) {
        console.log(e);
        return res.errorResponse(
          "An unexpected error occured while refreshing data."
        );
      }
    } catch (e) {
      console.log(e);
      return res.errorResponse(
        "Unexpected error occured while processing file."
      );
    }
  }
);

//EXPORT Data
router.get("/:key/export", security.isAdmin, async function (req, res) {
  let dataset = datasets.get(req.params.key);
  if (!dataset) return res.errorResponse("Invalid key!");

  try {
    let data = await datasets.getData(req.params.key);

    const parser = new Parser();
    const csv = parser.parse(data);

    res.attachment(`${dataset.key}.csv`);
    res.status(200).send(csv);
  } catch (e) {
    console.log(e);
    return res.errorResponse("Unexpected error occured while exporting data.");
  }
});

module.exports = router;
