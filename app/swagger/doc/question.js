/**
 * Une Question
 * @typedef {object} Question
 * @property {integer} id - id d'une question
 * @property {string} question - libellé de la question
 * @property {integer} quiz_id - id du quiz auquel appartient la question
 * @property {array<Answer>} answers - choix de réponses de la question
 */

/**
 * Création d'une question
 * @typedef {object} QuestionCreate
 * @property {string} question - libellé de la question
 * @property {array<AnswerCreate>} answers - choix de réponses de la question
 */

/**
 * Mise à jour d'une question
 * @typedef {object} QuestionUpdate
 * @property {integer} id - id d'une question
 * @property {string} question - libellé de la question
 * @property {array<AnswerUpdate>} answers - choix de réponses de la question
 */

