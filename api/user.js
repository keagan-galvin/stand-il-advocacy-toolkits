var express = require("express");
var router = express.Router();
var user = require("../application/user");
const { checkSchema, query, validationResult } = require("express-validator");
var security = require("../infrastructure/security");
const { Parser } = require("json2csv");

// GET ALL
router.get(
  "/all",
  security.isAdmin,
  async function (req, res) {
    let results = await user.getAll();
    return res.successResponse(results);
  }
);

//FIND BY EMAIL
router.get("/", query("email").isEmail(), async function (req, res) {
  let validation = validationResult(req);
  if (validation.isEmpty()) {
    let result = await user.getByEmail(req.query.email);
    return res.successResponse(result);
  } else return res.validationError(validation);
});

//UPSERT
router.post(
  "/",
  checkSchema({
    email: {
      isEmail: true,
      isLength: {
        options: {
          min: 2,
          max: 255,
        },
      },
    },
    firstName: {
      isLength: {
        options: {
          min: 2,
          max: 100,
        },
      },
    },
    lastName: {
      isLength: {
        options: {
          min: 2,
          max: 100,
        },
      },
    },
  }),
  async function (req, res) {
    let validation = validationResult(req);

    if (validation.isEmpty())
      return res.successResponse(await user.upsert(req.body));
    else return res.validationError(validation);
  }
);

//EXPORT
router.get(
  "/export",
  security.isAdmin,
  async function (req, res) {
    let data = await user.getAll();

    const parser = new Parser({
      fields: [
        {
          label: "Email",
          value: "email",
        },
        {
          label: "First Name",
          value: "firstName",
        },
        {
          label: "Last Name",
          value: "lastName",
        },
        {
          label: "Phone",
          value: "phone",
        },
        {
          label: "City",
          value: "city",
        },
        {
          label: "State",
          value: "state",
        },
        {
          label: "Zipcode",
          value: "zip",
        },
        {
          label: "Receive Emails",
          value: "email_optin",
        },
      ],
    });

    const csv = parser.parse(data);

    res.attachment("users.csv");
    res.status(200).send(csv);
  }
);

module.exports = router;
