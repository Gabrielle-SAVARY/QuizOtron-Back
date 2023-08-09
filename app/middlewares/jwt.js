const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;
const jwtExpiresIn = process.env.JWT_EXPIRES_IN;

// Fonction pour générer un token avec en entrée un utilisateur
const getToken = (user) => {
  return jwt.sign(
    // data
    {
      id: user.id,
      pseudo: user.pseudo,
    },
    // secret
    jwtSecret,
    // options
    {
      algorithm: 'HS256',
      expiresIn: jwtExpiresIn
    }
  );
};

// Fonction pour vérifier le token
const checkToken = (req, res, next) => {
  // On récupère le token dans le header de la requête
  let token = req.headers.authorization;
  // Si le token n'existe pas, on renvoie une erreur
  if (!token) {
    return res.status(401).json(
      {
        statusCode:401,
        message: 'No token provided'
      });
  }

  // Si le token existe, on aura notre token sous la forme "Bearer token"
  // On split le token pour récupérer uniquement le token
  token = token.split(' ')[1];

  // On vérifie le token
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    // Si le token n'est pas valide, on renvoie une erreur
    if (err) {
      return res.status(401).json(
        {
          statusCode:401,
          message: 'Invalid token'
        });
      }

    // Si tout est bon, on stocke les données du token dans req.user
    req.user = decoded;
    // On passe à la suite
    next();
  });
};

module.exports = {
  getToken,
  checkToken
};