const express = require("express");
const path = require("path");

// CONFIGURE
const app = express();

app.use(express.static("public"));


// ROUTING
app.get("/", function(req, res, next) {
    res.redirect("/app");
});

app.get(["/app", "/app/*"], function (req, res, next) {
  res.sendFile(path.join(__dirname, "./public", "app.html"));
});


// START
const port = process.env.PORT || 3000;
var server = app.listen(port, function() {
  console.log('Listening on %s', port);
});
