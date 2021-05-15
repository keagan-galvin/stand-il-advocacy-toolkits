var express = require("express");
var router = express.Router();
var multer = require("multer");
var fs = require("fs");
var csv = require("csv-parser");
var datasets = require("../application/datasets");
var security = require("../infrastructure/security");
const db = require("../domain/models");

var upload = multer({ dest: "uploads/" });

// GET ALL
router.post(
  "/upload",
  [security.isAdmin, upload.single("data_set")],
  async function (req, res) {
    let results = [];

    await fs
      .createReadStream(req.file.path, "utf8")
      .pipe(csv())
      .on("data", (data) => {
        if (data.School === "0") data.School === null;
        if (data.Type === "0") data.Type === null;
        if (data.School_Name === "0") data.School_Name = null;
        if (data.City === "0") data.City = null;
        if (data.County === "0") data.County = null;
        if (data.School_Type === "0") data;
        if (data.Administrator === "0") data.Administrator = null;
        if (data.Mailing_Address === "0") data.Mailing_Address = null;
        if (data.Zip === "0") data.Zip = null;
        if (data.Telephone === "0") data.Telephone = null;
        if (data.school_website === "0") data.school_website = null;

        for(let key in data) {
          if (data[key] === '') data[key] = null;
        }

        console.log(data.P_Student_Enrollment_Children_with_Disabilities);

        results.push(data);
      });
      try {
        await datasets.refresh(req.body.key, results);
        return res.successResponse("success");    
      }
      catch(e) {
        console.log(e);
        return res.errorResponse(e);
      }
    }
);

module.exports = router;
