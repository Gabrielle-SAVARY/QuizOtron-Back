//* ROUTE: GET /profile/favorites
/**
 * GET /profile/favorites
 * @summary Get user favorites
 * @tags Profile Favorites
 * @security BearerAuth
 * @return {array<UserFavoritesQuiz>} 200 - quiz favoris d'un utilisateur
 * @returns {Error} 500 - ERREUR sur getUserFavorites() * 
 */
/**
 * UserFavoritesQuiz
 * @typedef {object} UserFavoritesQuiz
 * @property {integer} id - id de l'utilisateur
 * @property {string} pseudo - pseudo de l'utilisateur
 * @property {string} email - email de l'utilisateur
 * @property {string} firstname - firstname de l'utilisateur
 * @property {string} lastname - lastname de l'utilisateur
 * @property {number} global_score - global_score de l'utilisateur
 * @property {integer} role_id - role de l'utilisateur
 * @property {array<QuizFavorites>} favorites - quiz favoris de l'utilisateur
*/
/**
 * UserFavoritesQuiz
 * @typedef {object} QuizFavorites
 * @property {integer} id - id du quiz
 * @property {string} title - nom du quiz
 * @property {string} description - description du quiz
 * @property {string} thumbnail - image du quiz
 * @property {Level} level - niveau du quiz
 * @property {AuthorQuiz} author - auteur du quiz
 * @property {array<Tag>} tags - tags/catégories du quiz
 * @property {object} favorite - liaison entre l'utilisateur et le quiz
*/
/**
 * favorite
 * @typedef {object} Favorite
 * @property {integer} quiz_id - id du quiz
 * @property {integer} user_id - id de l'utilisateur/auteur du quiz
*/

//* ROUTE: POST /profile/favorites
/** 
 * POST /profile/favorites
 * @summary Add a quiz to user favorites
 * @tags Profile Favorites
 * @security BearerAuth
 * @param {QuizId} request.body.required - id du quiz
 * @returns {Success} 200 - message de succès: Le quiz a bien été ajouté à vos favoris!
 * @returns {Error} 500 - ERREUR sur addFavorite()
*/
/**
 * QuizId
 * @typedef {object} QuizId
 * @property {integer} quiz_id - id du quiz
*/

//* ROUTE: DELETE /profile/favorites
/** 
 * DELETE /profile/favorites/
 * @summary Delete a quiz from user favorites
 * @tags Profile Favorites
 * @security BearerAuth
 * @param {QuizId} request.body.required - id du quiz
 * @returns {Success} 200 - message de succès: Le quiz a bien été supprimé de vos favoris!
 * @returns {Error} 500 - ERREUR sur deleteFavorite()
*/