/**
 * Une Réponse
 * @typedef {object} Answer
 * @property {integer} id - id de la réponse
 * @property {string} answer - libellé de la réponse
 * @property {boolean} is_valid - réponse correcte ou non
 * @property {integer} question_id - id de la question à laquelle appartient la réponse
 */

/**
 * Création d'une réponse
 * @typedef {object} AnswerCreate
 * @property {string} answer - libellé de la réponse
 * @property {boolean} is_valid - réponse correcte ou non
 */

/**
 * Mise à jour d'une réponse
 * @typedef {object} AnswerUpdate
 * @property {integer} id - id de la réponse
 * @property {string} answer - libellé de la réponse
 * @property {boolean} is_valid - réponse correcte ou non
 */