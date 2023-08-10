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

      console.log('decoded', decoded);
      // LOG de decoded
      // decoded = { id: 9, pseudo: 'Mouss', iat: 1691673536, exp: 1691684336 }
      // iat = date de création du token en timestamp
      // exp = date d'expiration du token en timestamp

    // On vérifie si le token est expiré
    if (new Date() > new Date(decoded.exp * 1000)) {
      return res.status(401).json(
        {
          statusCode:401,
          message: 'Session expirée, veuillez vous reconnecter'
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