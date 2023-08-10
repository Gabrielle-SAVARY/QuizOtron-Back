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
 * Post un score
 * @typedef {object} PostScore
 * @property {integer} quiz_id - id du quiz joué
 * @property {integer} quiz_score - score obtenu par l'utilisateur
 */