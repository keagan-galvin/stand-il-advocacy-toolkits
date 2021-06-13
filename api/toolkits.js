var express = require("express");
var router = express.Router();
var fs = require("fs");
var csv = require("csv-parser");
const { Parser } = require("json2csv");

const toolkits = require("../application/toolkits");
const security = require("../infrastructure/security");

// GET ALL
router.get("/", security.isAdmin, function (req, res) {
  return res.successResponse(toolkits.getAll());
});

// Get Data
router.get("/:key", security.isAdmin, async function (req, res) {
  let dataset = toolkits.get(req.params.key);
  if (!dataset) return res.errorResponse("Invalid key!");

  try {
    let results = await datasets.getData(req.params.key);
    res.successResponse(results);
  } catch (e) {
    console.log(e);
    return res.errorResponse("Unexpected error occured while retrieving data.");
  }
});

// Get Data
router.get("/:key/:userId", async function (req, res) {
  let toolkit = toolkits.get(req.params.key);
  if (!toolkit) return res.errorResponse("Invalid key!");

  try {
    let result = await toolkits.getByUserId(req.params.key, req.params.userId);
    res.successResponse(
      result ? toolkit.toDto(result) : { userId: req.params.userId }
    );
  } catch (e) {
    console.log(e);
    return res.errorResponse("Unexpected error occured while retrieving data.");
  }
});

// Upsert Data
router.post("/:key/:userId", async function (req, res) {
  let toolkit = toolkits.get(req.params.key);
  if (!toolkit) return res.errorResponse("Invalid key!");

  try {
    return res.successResponse(
      await toolkits.upsert(req.params.key, toolkit.toEntity(req.body))
    );
  } catch (e) {
    console.log(e);
    return res.errorResponse("Unexpected error occured while saving data.");
  }
});

//EXPORT Data
router.get("/:key/export", security.isAdmin, async function (req, res) {
  let toolkit = toolkits.get(req.params.key);
  if (!toolkit) return res.errorResponse("Invalid key!");

  try {
    let data = await toolkits.getData(req.params.key);

    const parser = new Parser();
    const csv = parser.parse(data);

    res.attachment(`${toolkit.key}.csv`);
    res.status(200).send(csv);
  } catch (e) {
    console.log(e);
    return res.errorResponse("Unexpected error occured while exporting data.");
  }
});

module.exports = router;
