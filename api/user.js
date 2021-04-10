var express = require("express");
var router = express.Router();
var user = require("../application/user");

//FIND BY EMAIL
router.get('/', async function(req, res) {
    if (!req.query.email) res.errorResponse("email is required.");
    var result = await user.getByEmail(req.query.email);
    return res.successResponse(result);
});

//UPSERT
router.post('/', function(req, res) {
    console.log(req.body);
    return res.successResponse(user.upsert(req.body));
});

module.exports = router;