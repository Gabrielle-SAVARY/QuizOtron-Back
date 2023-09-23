const sanitizer = require('sanitizer');
  
  // Fonction récursive pour échapper les valeurs de l'objet
  function escapeValue(value) {
    if (typeof value === 'string') {
        // Échapper les caractères spéciaux
        console.log('string !!!', value);
        return  sanitizer.escape(value); 
    } else if (Array.isArray(value)) {
        console.log('tableau !!!', value);
      // Échappe chaque élément du tableau
      return value.map(escapeValue);
    } else if (typeof value === 'object' && value !== null) {
        console.log('objet !!!', value);
      // Échappe chaque valeur de l'objet
      const escapedObject = {};
      for (const key in value) {
        if (key in value) {
          escapedObject[key] = escapeValue(value[key]);
        }
      }
      return escapedObject;
    } else {
      // Si c'est un autre type de valeur ou null ne pas échapper
      return value;
    }
  }
  
  // Échappe toutes les valeurs du corps de la requête
  const bodySanitizer = (req, res, next) => {
    console.log('req.body AVANT', req.body);
    if (req.body) {
      req.body = escapeValue(req.body);
    }    
    console.log('req.body APRES', req.body);
    next();
  };
  
  module.exports = bodySanitizer;
