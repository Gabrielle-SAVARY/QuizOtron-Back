const joi = require('joi');

const signupSchema = joi.object({
    pseudo: joi.string().min(3).max(30).required().messages({
      'string.empty': `Le champs pseudo ne peut pas être vide.`,
      'any.required': `Le champs pseudo est obligatoire.`,
      'string.min': `Le champs pseudo doit comporter au minimum {#limit} caractères.`,
      'string.max': `Le champs pseudo doit comporter au maximum {#limit} caractères.`,
    }),
    email: joi.string().email({tlds: {allow: true}}).required().messages({
      'string.empty': `Le champs email ne peut pas être vide.`,
      'any.required': `Le champs email est obligatoire.`,
      'string.email': 'Le format de l\'adresse email est incorrecte',
    }), 
    firstname: joi.string().min(3).max(30).required().messages({
      'string.empty': `Le champs prénom ne peut pas être vide.`,
      'any.required': `Le champs prénom est obligatoire.`,
      'string.min': `Le champs prénom doit comporter au minimum {#limit} caractères`,
      'string.max': `Le champs prénom doit comporter au maximum {#limit} caractères`,
    }),
    lastname: joi.string().min(3).max(30).required().messages({
      'string.empty': `Le champs nom ne peut pas être vide.`,
      'any.required': `Le champs nom est obligatoire.`,
      'string.min': `Le champs nom doit comporter au minimum {#limit} caractères`,
      'string.max': `Le champs nom doit comporter au maximum {#limit} caractères`,
    }),
    password: joi.string().min(6).max(30).required().messages({
      'string.empty': `Le mot de passe ne peut pas être vide.`,
      'any.required': `Le mot de passe est obligatoire.`,
      'string.min': `Le mot de passe doit comporter au minimum {#limit} caractères`,
      'string.max': `Le mot de passe doit comporter au maximum {#limit} caractères`,
    }),
    passwordConfirm: joi.valid(joi.ref('password')).required().messages({
      'any.only': 'Les mots de passe ne sont pas identiques.',
    }),
});

module.exports = {
  signupSchema
};