const Joi = require("joi");                                  // Requiring joi for validators

module.exports.qusSchema = Joi.object({
    qus: Joi.object({
        email: Joi.string().required(),
        name: Joi.string().required(),
        profession: Joi.string().allow("",null),
        msg: Joi.string().required(),
    }).required()
});
