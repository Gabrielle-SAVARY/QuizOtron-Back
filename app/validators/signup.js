const joi = require('joi');

const signupSchema = joi.object({
    pseudo: joi.string().min(3).max(30).required(),
    email: joi.string().email({tlds: {allow: true}}).required(),
    firstname: joi.string().min(3).max(30).required(),
    lastname: joi.string().min(3).max(30).required(),
    password: joi.string().min(6).max(30).required(),
    passwordConfirm: joi.ref('password')
});

module.exports = {
  signupSchema
};