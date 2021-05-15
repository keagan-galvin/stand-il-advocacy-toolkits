require("dotenv").config();

const express = require("express");
const path = require("path");
const constants = require("./constants");

// CONFIGURE
const app = express();
app.use(express.json());
app.use(express.static("public"));

app.use(function (req, res, next) {
  res.successResponse = (data) => {
    return res.send({
      status: constants.APIStatus.SUCCESS,
      data,
    });
  };

  res.errorResponse = (message = "An unexpected error occurred", errors) => {
    return res.send({
      status: constants.APIStatus.ERROR,
      message,
      errors,
    });
  };

  res.validationError = (validation) => {
    return res
      .status(400)
      .errorResponse("Validation errors where found.", validation.mapped());
  };

  next();
});

//TEST Database Connection
const db = require("./domain/models");

db.sequelize.authenticate().then(
  (success) => console.log("DB Connection Established."),
  (error) => console.error("DB FAILED TO CONNECT! Error: " + error)
);

// VIEW ROUTING
app.get("/", function (req, res, next) {
  res.redirect("/app/");
});

app.get(["/app", "/app/*"], function (req, res, next) {
  res.sendFile(path.join(__dirname, "./public", "app.html"));
});

app.get(["/admin", "/admin/*"], function (req, res, next) {
  res.redirect("/app/#/admin");
});

// API ROUTING
app.use("/api/auth", require("./api/authorization"));
app.use("/api/users", require("./api/user"));
app.use("/api/admin", require("./api/admin"));
app.use("/api/datasets", require("./api/datasets"));

// START
const port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  console.log("Listening on %s", port);
});
