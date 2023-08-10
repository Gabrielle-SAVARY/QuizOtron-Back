//* ROUTE: GET /profile/history
/** 
 * GET /profile/history
 * @summary Get user last 10 quiz'score history
 * @tags Profile History
 * @security BearerAuth
 * @return {array<History>} 200 - tableau des 10 derniers scores de l'utilisateur du plus récent au plus ancien 
 * @returns {Error} 500 - ERREUR sur getUserHistory() * 
*/
/**
 * History
 * @typedef {object} History
 * @property {integer} user_id - id de l'utilisateur
 * @property {integer} id - id du score du quiz
 * @property {number} quiz_score - score du quiz
 * @property {CardQuiz} quiz - infos du quiz
*/

//* ROUTE: POST /profile/history
/**
 * POST /profile/history
 * @summary Add a quiz to user history with score
 * @tags Profile History
 * @security BearerAuth
 * @param {PostScore} request.body.required - id quiz et score du quiz
 * @return {SuccessUserHistory} 200 - message de succès + tableau des 10 derniers scores de l'utilisateur
 */


//* SCORE
/**
 * Un Score
 * @typedef {object} Score
 * @property {integer} id - id du score
 * @property {integer} quiz_score - score obtenu par l'utilisateur
 * @property {User} user - id de l'utilisateur
 * @property {Quiz} quiz_id - id du quiz
 * @example
 * {
 * id: 1,
 * quiz_score: 10,
 * user_id: 1,
 * quiz_id: 1
 */

/**
 * 
 * @typedef {object} PostScore
 * @property {integer} quiz_id - id du quiz joué
 * @property {integer} quiz_score - score obtenu par l'utilisateur
 */
