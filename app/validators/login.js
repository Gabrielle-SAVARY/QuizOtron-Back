const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string().email({tlds: {allow: true}}).required(),
    password: Joi.string().min(6).max(30).required(),
});

module.exports = {
  loginSchema
};