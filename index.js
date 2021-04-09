const express = require("express");
const path = require("path");

// CONFIGURE
const app = express();
const port = 3000;

app.use(express.static("public"));


// ROUTING
app.get("/", function(req, res, next) {
    res.redirect("/app");
});

app.get(["/app", "/app/*"], function (req, res, next) {
  res.sendFile(path.join(__dirname, "./public", "app.html"));
});


// START
app.listen(port, () => {
  console.log(`App listening on PORT: ${port}`);
});
