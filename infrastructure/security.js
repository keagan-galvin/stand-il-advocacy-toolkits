const jwt = require("jsonwebtoken");

function generateAccessToken(data) {
  var lifespan = 1000 * 60 * 60;
  delete data.iat;
  delete data.exp;
  var token = jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: lifespan });
  return {
    token,
    expires: new Date().getTime() + 1000 * 60 * 60,
  };
}

function hasScope(req, res, next, scope) {
  var bearerToken = req.get("Authorization");
  if (!bearerToken) bearerToken = req.query.token;

  if (!bearerToken) return res.sendStatus(403);
  if (!bearerToken.startsWith("Bearer ")) return res.sendStatus(403);

  return jwt.verify(
    bearerToken.replace("Bearer ", ""),
    process.env.TOKEN_SECRET,
    function (err, data) {
      if (err) return res.sendStatus(403);
      else if (!data.scopes.some((x) => x === scope))
        return res.sendStatus(403);
      else return next();
    }
  );
}

function refreshToken(token) {
  return jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
    if (err) return null;
    return generateAccessToken(data);
  });
}

module.exports = {
  generateAccessToken,
  hasScope,
  refreshToken,
};
