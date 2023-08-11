//* Model
/**
 * Quiz
 * @typedef {object} Quiz
 * @property {integer} id - Quiz id
 * @property {string} title - Quiz title
 * @property {string} description - Quiz description
 * @property {string} thumbnail - Quiz thumbnail
 * @property {integer} level_id - Quiz level id
 * @property {integer} user_id - Quiz user id
 * @property {Level} level - Quiz level name
 * @property {Author} auteur - Quiz user id
 * @property {array<Tag>} tags - Quiz tags
 * @property {array<Question>} questions - Quiz questions
 */

//* ROUTER - quizRouter.js
/**
 * GET /quiz
 * @summary Get all quizzes
 * @tags Quiz
 * @return {QuizCardDetails } 200 - success response - application/json
 */
 /**
 * Quiz card (sans questions)
 * @typedef {object} QuizCardDetails résultat de la recherche de tous les quiz
 * @property {integer} id - Quiz id
 * @property {string} title - Quiz title
 * @property {string} description - Quiz description
 * @property {string} thumbnail - Quiz thumbnail
 * @property {integer} level_id - Quiz level id
 * @property {integer} user_id - Quiz user id
 * @property {Level} level - Quiz level name
 * @property {Author} auteur - Quiz user id
 * @property {array<Tag>} tags - Quiz tags
 */
 /**

/**
 * GET /quiz/{id}
 * @summary Get one quiz
 * @tags Quiz
 * @param {string} id.path.required - Quiz id
 * @return {Quiz} 200 - success response - application/json
 */

//* ROUTER - profileRouter.js

//* Cherche des quiz de l'utilisateur
    //TODO Attention: GET non utilisé
/** 
 * GET /profile/quiz
 * @summary Get user quizzes
 * @tags Profile Quiz
 * @security BearerAuth
 * @return {UserQuiz} 200 - success response - application/json
*/
 /**
 * Cherche à partir d'un tag
 * @typedef {object} UserQuiz résultat d'une recherche par tag
 * @property {integer} id Identifiant de l'utilisateur
 * @property {string} pseudo Pseudo de l'utilisateur
 * @property {string} email Email de l'utilisateur
 * @property {string} firstname Prénom de l'utilisateur
 * @property {string} lastname Nom de l'utilisateur
 * @property {string} password Mot de passe de l'utilisateur
 * @property {integer} global_score Score global de l'utilisateur
 * @property {integer} role_id Role de l'utilisateur
 * @property {array<QuizCard>} quizzes liste des quiz d'un tag
 */
 /**
* Quiz card (sans questions + uniqument id des liaisons)
* @typedef {object} QuizCard résultat de la recherche de tous les quiz
* @property {integer} id - Quiz id
* @property {string} title - Quiz title
* @property {string} description - Quiz description
* @property {string} thumbnail - Quiz thumbnail
* @property {integer} level_id - Quiz level id
* @property {integer} user_id - Quiz user id
* @property {array<Tag>} tags - Quiz tags
*/

/**
 * POST /profile/quiz
 * @summary Create a quiz
 * @tags Profile Quiz
 * @param {Quiz} request.body.required - Quiz info
 * @return {array<Quiz>} 200 - success response - application/json
 */
 /**
* newQuiz info
* @typedef {object} newQuiz 
* @property {string} title - Quiz title
* @property {string} description - Quiz description
* @property {string} thumbnail - Quiz thumbnail
* @property {integer} level_id - Quiz level id
* @property {integer} user_id - Quiz user id
* @property {integer} tag_id - Quiz tag id
*/
