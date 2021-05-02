var express = require("express");
var router = express.Router();
var security = require("../infrastructure/security");

router.get("/token", function (req, res) {
  var basicToken = req.get("Authorization");

  if (!basicToken) return invalidAuth();
  if (!basicToken.startsWith("Basic ")) return invalidAuth();

  let tokenParts = Buffer.from(basicToken.replace("Basic ", ""), "base64")
    .toString("ascii")
    .split(":");

  if (tokenParts.length != 2) return invalidAuth();

  if (
    tokenParts[0] !== process.env.ADMIN_USERNAME ||
    tokenParts[1] !== process.env.ADMIN_PASSWORD
  )
    return invalidAuth();

  return res.successResponse(
    security.generateAccessToken({
      username: process.env.ADMIN_USERNAME,
      scopes: ["admin"],
    })
  );

  function invalidAuth() {
    return res.errorResponse("Invalid username/password combination");
  }
});

module.exports = router;
