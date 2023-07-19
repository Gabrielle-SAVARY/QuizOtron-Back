const Joi = require('joi');

const updateUserSchema = Joi.object({
    pseudo: Joi.string().min(3).max(30),
    email: Joi.string().email({tlds: {allow: true}}),
    oldPassword: Joi.string().min(6).max(30).when('password', {
        is: Joi.exist(), then: Joi.required()
    }),
    password: Joi.string().min(6).max(30),
    passwordConfirm: Joi.string().when('password', {
      is: Joi.exist(),
      then: Joi.required().valid(Joi.ref('password'))
  })
});

module.exports = {
  updateUserSchema
};