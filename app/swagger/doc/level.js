
//* ROUTE: GET /level
/**
 * GET /level
 * @summary Get all levels
 * @tags Level
 * @return {array<Level>} 200 - tableau de tous les niveaux
 * @return {Error} 500 - Erreur serveur
*/
/**
 * un Level
 * @typedef {object} Level
 * @property {number} id - id du level
 * @property {string} name - nom du level
 */


// /** 
//  * GET /level/{name}
//  * @summary Get all quizzes by level
//  * @tags Level
//  * @param {string} name.path.required - Level name
//  * @return {array<Level>} 200 - success response - application/json
//  * @returns {Error} 500 - ERREUR sur getQuizzesByLevel() * 
// */

// /**
//  * Liste des levels
//  * @typedef {Object} LevelDetails 
//  * @property {number} id - id du level
//  * @property {string} name - nom du level
//  * @property {array<Quiz>} quizzes - liste des quizzes du level
//  */