
/**
 * Un tag
 * @typedef {object} Tag - Un tag
 * @property {integer} id - L'identifiant du tag
 * @property {string} name - Le nom du tag
 */

//* tagRouter.js
//* Cherche tous les tags
/**
 * GET /tag
 * @tags Tag
 * @summary Get all tags
 * @return {array<Tag>} 200 - success response - application/json
 * 
 */

//* Cherche à partir d'un tag
 /**
 * Cherche à partir d'un tag
 * @typedef {object} TagName résultat d'une recherche par tag
 * @property {integer} id - L'identifiant du tag
 * @property {string} name - Le nom du tag
 * @property {array<Quiz>} quizzes liste des quiz d'un tag
 */
/** 
 * GET /tag/{name}
 * @tags Tag
 * @summary Get all quizzes by tag
 * @param {string} name.path.required - Tag name
 * @return {TagName} 200 - success response - application/json
*/