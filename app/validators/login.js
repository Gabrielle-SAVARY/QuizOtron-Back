const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email({tlds: {allow: true}}).required().messages({
    'string.empty': `Le champs email ne peut pas être vide.`,
    'any.required': `Le champs email est obligatoire.`,
    'string.email': 'Le format de l\'adresse email est incorrecte',
  }), 
  password: Joi.string().min(6).max(30).required().messages({
    'string.empty': `Le champs mot de passe ne peut pas être vide.`,
    'any.required': `Le champs mot de passe est obligatoire.`,
    'string.min': `Le mot de passe doit comporter au minimum {#limit} caractères`,
    'string.max': `Le mot de passe doit comporter au maximum {#limit} caractères`,
  })
});

module.exports = {
  loginSchema
};

