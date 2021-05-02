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

  if (tokenParts.length != 1) return invalidAuth();

  return res.successResponse(
    security.generateAccessToken({
      username: tokenParts[0],
      scopes: ["basic"],
    })
  );

  function invalidAuth() {
    return res.errorResponse("Invalid username/password combination");
  }
});

router.get("/refreshToken", function (req, res) {
  var basicToken = req.get("Authorization");

  if (!basicToken) return invalidAuth();
  if (!basicToken.startsWith("Bearer ")) return invalidAuth();

  let result = security.refreshToken(basicToken.replace("Bearer ", ""));

  if (!result) return invalidAuth();

  return res.successResponse(result);

  function invalidAuth() {
    return res.errorResponse("Invalid authorization token");
  }
});

module.exports = router;
