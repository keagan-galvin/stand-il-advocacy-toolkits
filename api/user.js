var express = require("express");
var router = express.Router();
var user = require("../application/user");
const {
    checkSchema,
    query,
    validationResult
} = require('express-validator');

//FIND BY EMAIL
router.get('/',
    query('email').isEmail(),
    async function (req, res) {
        let validation = validationResult(req);
        if (validation.isEmpty()) {

            let result = await user.getByEmail(req.query.email);
            return res.successResponse(result);

        } else return res.validationError(validation);
    });

//UPSERT
router.post('/',
    checkSchema({
        email: {
            isEmail: true,
            isLength: {
                options: {
                    min: 2,
                    max: 255
                }
            }
        },
        firstName: {
            isLength: {
                options: {
                    min: 2,
                    max: 100
                }
            }
        },
        lastName: {
            isLength: {
                options: {
                    min: 2,
                    max: 100
                }
            }
        },
        phone: {
            isLength: {
                options: {
                    min: 2,
                    max: 12
                }
            }
        },
        city: {
            isLength: {
                options: {
                    min: 2,
                    max: 100
                }
            }
        },
        state: {
            isLength: {
                options: {
                    min: 2,
                    max: 2
                }
            }
        },
        zip: {
            isLength: {
                options: {
                    min: 5,
                    max: 10
                }
            }
        },
    }),
    async function (req, res) {
        let validation = validationResult(req);

        if (validation.isEmpty())
            return res.successResponse(await user.upsert(req.body));
        else
            return res.validationError(validation);
    });

module.exports = router;