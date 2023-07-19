const Joi = require('joi');

const createQuizSchema = Joi.object({
  quiz: Joi.object({
    title: Joi.string().min(3).max(150).required(),
    description: Joi.string().min(3).max(300).required(),
    thumbnail: Joi.string().required(),
    level_id: Joi.number().integer().required(),
    user_id: Joi.number().integer().required(),
    tag_id: Joi.number().integer().required(),
  }).required(),

  questions: Joi.array().items(
    Joi.object({
      question: Joi.string().min(3).max(150).required(),
      answers: Joi.array().items(
        Joi.object({
          answer: Joi.string().min(3).max(150).required(),
          is_valid: Joi.boolean().required(),
        })
      ).min(4).max(4).required(),
    })
  ).min(10).max(10).required(),
});

module.exports = {
  createQuizSchema
};