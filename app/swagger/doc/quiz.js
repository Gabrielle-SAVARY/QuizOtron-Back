//* ROUTE: GET /quiz
/**
 * GET /quiz
 * @summary Get all quizzes
 * @tags Quiz
 * @return {array<CardQuiz>} 200 - retourne tous les quiz avec les données à afficher sur les cartes de quiz
 * @return {Error} 404 - Impossible de récupérer les quiz
 * @returns {Error} 500 - ERREUR sur getAllQuizzes()  
*/
/**
 * Une carte de quiz
 * @typedef {object} CardQuiz
 * @property {integer} id - id du quiz
 * @property {title} title - nom du quiz
 * @property {string} description - description du quiz
 * @property {string} thumbnail - image du quiz
 * @property {Level} level - niveau du quiz
 * @property {AuthorQuiz} author - auteur du quiz
 * @property {array<Tag>} tags - tags/catégories du quiz
*/

//* ROUTE: GET /quiz/:id
/**
 * GET /quiz/{id}
 * @summary Get a quiz by id
 * @tags Quiz
 * @param {integer} id.path.required - id du quiz
 * @return {Quiz} 200 - retourne un quiz
 * @return {Error} 404 - Quiz introuvable
 * @returns {Error} 500 - ERREUR sur getOneQuiz()  
 */
/**
 * Un Quiz
 * @typedef {object} Quiz
 * @property {CardQuiz} - infos de la carte du quiz
 * @property {arrray<Question>} questions - questions du quiz
 */





