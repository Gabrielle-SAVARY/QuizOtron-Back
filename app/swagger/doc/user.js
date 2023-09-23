
/**
 * AuthorQuiz
 * @typedef {object} AuthorQuiz
 * @property {integer} id - id de l'auteur du quiz
 * @property {string} pseudo - pseudo de l'auteur du quiz
*/

/**
 * UserInfosUpdate - formulaire de mise à jour des infos utilisateur (email et pseudo ou password)
 * @typedef {object} UserInfosUpdate
 * @property {string} email email de l'utilisateur
 * @property {string} pseudo pseudo de l'utilisateur
 * @property {string} oldPassword mot de passe de l'utilisateur
 * @property {string} password mot de passe de l'utilisateur
 * @property {string} passwordConfirm confirmation du mot de passe de l'utilisateur
*/

/**
 * Un User
 * @typedef {object} User Détails d'un utilisateur
 * @property {integer} id Identifiant de l'utilisateur
 * @property {string} pseudo Pseudo de l'utilisateur
 * @property {string} email Email de l'utilisateur
 * @property {string} firstname Prénom de l'utilisateur
 * @property {string} lastname Nom de l'utilisateur
 * @property {string} password Mot de passe de l'utilisateur
 * @property {Role} role Role de l'utilisateur
 */


//* ROLE DE L'UTILISATEUR
/**
 * Un Role
 * @typedef {object} Role
 * @property {integer} id Identifiant du role
 * @property {string} label Label du role
 * @example
 * {
 * id: 2,
 * label: "admin"
 * }
 */