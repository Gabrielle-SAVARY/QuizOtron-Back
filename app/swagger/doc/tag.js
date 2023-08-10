//* ROUTE: GET /tag
/**
 * GET /tag
 * @tags Tag
 * @summary Get all tags
 * @return {array<Tag>} 200 - tableau de toutes les catégories
 * @returns {Error} 500 - ERREUR sur getTags() * 
 */

/**
 * Un tag/ une catégorie
 * @typedef {object} Tag - un tag/ une catégorie
 * @property {integer} id - id du tag
 * @property {string} name - nom du tag
 */

//TODO Attention: non utilisé
// /** 
//  * GET /tag/{name}
//  * @tags Tag
//  * @summary Get all quizzes by tag
//  * @param {string} name.path.required - Tag name
//  * @return {TagName} 200 
//  * @returns {Error} 500 - ERREUR sur getQuizzesByTag() * 
// */
//  /**
//  * Liste des quiz d'un tag/ d'une catégorie
//  * @typedef {object} TagName résultat d'une recherche par tag
//  * @property {integer} id - L'identifiant du tag
//  * @property {string} name - Le nom du tag
//  * @property {array<Quiz>} quizzes liste des quiz d'un tag
//  */