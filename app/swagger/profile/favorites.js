/**
 * GET /profile/favorites
 * @summary Get user favorites
 * @tags Profile
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
 * @property {title} title - nom du quiz
 * @property {string} description - description du quiz
 * @property {string} thumbnail - image du quiz
 * @property {Level} level - niveau du quiz
 * @property {AuthorQuiz} author - auteur du quiz
 * @property {array<Tag>} tags - tags/catégories du quiz
 * @property {object} favorite - liaison entre l'utilisateur et le quiz
*/

/**
 * UserFavoritesQuiz
 * @typedef {object} favorite
 * @property {integer} quiz_id - id du quiz
 * @property {integer} user_id - id de l'utilisateur/auteur du quiz
*/