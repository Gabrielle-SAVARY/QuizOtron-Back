
// On récupère le schéma et le provider (body, params, query, etc.)
const isValid = (schema, provider = 'body') => {
  return function (req, res, next) {
    // On valide les données reçues du body avec le schéma Joi et on récupère les données validées et les erreurs
    const { value, error } = schema.validate(req[provider], {abortEarly: false});

    // Si on a une erreur, on renvoie le message d'erreur
    if (error) {
      return res.status(400).json({
        statusCode:400,
        message : error.message
      }
        );
    }

    // Sinon, on enregistre les données validées dans req.body et on passe au middleware suivant
    req[provider] = value;
    next();
  }
};
 
module.exports = isValid;