//* ROUTE: POST /profile/quiz
/** 
 * POST /profile/quiz/
 * @summary Create a quiz
 * @description Creér un quiz avec un objets contenant les infos du quiz et un tableau de 10 questions (avec 4 réponses par question, 1 seule réponse correcte)
 * @tags Profile Quiz
 * @security BearerAuth
 * @param {CreateQuiz} request.body.required - nouveau quiz
 * @return {Success} 200 - message de succès: Le quiz a été créé avec succès
 * @returns 500 - ERREUR sur createQuiz() * 
*/
/**
 * Créer un quiz: infos du quiz
 * @typedef {object} CreateQuiz
 * @property {QuizInfos} quiz - infos du nouveau quiz
 * @property {array<QuestionCreate>} questions - tableau de 10 questions du nouveau quiz
 */

/**
 * Créer un quiz: infos du quiz
 * @typedef {object} QuizInfos
 * @property {string} title - titre du quiz
 * @property {string} description - description du quiz
 * @property {string} thumbnail - image du quiz
 * @property {integer} level_id - id du niveau du quiz
 * @property {integer} user_id - id de l'utilisateur qui a créé le quiz
 * @property {integer} tag_id - id du tag/catégorie du quiz
 */

//* ROUTE: PATCH /profile/quiz/:id
/** 
 * PATCH /profile/quiz/{id}
 * @summary Update a quiz
 * @tags Profile Quiz
 * @security BearerAuth
 * @param {integer} id.path.required - Quiz id
 * @param {UpdateQuiz} request.body.required - quiz à mettre à jour
 * @return {Success} 200 - message de succès: Le quiz a bien été modifié.
 * @return {Error} 500 - ERREUR sur updateQuiz() * 
*/

/**
 * Créer un quiz: infos du quiz
 * @typedef {object} UpdateQuiz
 * @property {QuizInfos} quiz - infos du nouveau quiz
 * @property {array<QuestionUpdate>} questions - tableau de 10 questions du quiz et réponses
 */

//* ROUTE: DELETE /profile/quiz/:id
/** 
 * DELETE /profile/quiz/{id}
 * @summary Delete a quiz
 * @tags Profile Quiz
 * @security BearerAuth
 * @param {integer} id.path.required - Quiz id
 * @return {Success} 200 - message de succès: Le quiz a bien été supprimé
 * @returns {Error} 500 - ERREUR sur deleteQuiz() * 
*/