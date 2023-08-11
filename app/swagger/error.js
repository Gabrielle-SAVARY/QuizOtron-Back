//*SUCCESS
/**
 * Success Message
 * @typedef {object} Success
 * @property {string} message message de succès
 */

/**
 * SignUp Success
 * @typedef {object} SuccessSignup
 * @property {string} message message de succès
 * @property {boolean} isRegistered utilisateur créé ou non
 */

/**
 * User history Success
 * @typedef {object} SuccessUserHistory
 * @property {string} message message de succès
 * @property {array<History>} data données de l'historique de l'utilisateur
 */

//* ERROR
/** SignUp Error
 * @typedef {object} Error
 * @property {string} message message d'erreur
 * @property {number} statusCode code de l'erreur
 */