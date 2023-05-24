const Joi = require('joi');

const updateQuizSchema = Joi.object({
  quiz: Joi.object({
    title: Joi.string().min(3).max(150),
    description: Joi.string().min(3).max(300),
    thumbnail: Joi.string(),
    level_id: Joi.number().integer(),
    user_id: Joi.number().integer(),
    tag_id: Joi.number().integer(),
  }),

  questions: Joi.array().items(
    Joi.object({
      id: Joi.number().integer().required(),
      question: Joi.string().min(3).max(150).required(),
      answers: Joi.array().items(
        Joi.object({
          id: Joi.number().integer().required(),
          answer: Joi.string().min(3).max(150).required(),
          is_valid: Joi.boolean().required(),
        })
      ).min(4).max(4).required(),
    })
  ),
});

module.exports = {
  updateQuizSchema
};