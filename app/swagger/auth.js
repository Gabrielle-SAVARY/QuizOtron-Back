/**
 * POST /signup
 * @tags Auth
 * @param {Postregister} request.body.required
 * @example request - Example Signup
 * {
 * "email" : "John@doe.com",
 * "pseudo" : "JohnDoe",
 * "firstname" : "John",
 * "lastname" : "Doe",
 * "password" : "123456",
 * "passwordConfirm" : "123456"
 * }
 * @returns {Success} 200 - message de succès
 * @returns {Error} 400 - Erreur email ou pseudo déjà utilisé
 * @returns {Error} 500 - ERREUR sur register()
 */


/** Postregister
 * @typedef {object} Postregister
 * @property {string} email email de l'utilisateur
 * @property {string} pseudo pseudo de l'utilisateur
 * @property {string} firstname prénom de l'utilisateur
 * @property {string} lastname nom de l'utilisateur
 * @property {string} password mot de passe de l'utilisateur
 * @property {string} passwordConfirm confirmation du mot de passe de l'utilisateur
 */


/**
 * POST /login
 * @tags Auth
 * @param {PostLogin} request.body.required
 * @example request - example Login
 * {
 * "email" : "John@Doe.com",
 * "password" : "123456"
 * }
 * @returns {LoggedUser} 200 - utilisateur connecté
 * @returns {Error} 400 - non autorisé - Mauvais identifiants
 * @returns {Error} 500 - ERREUR sur function()
 */

/**
 * PostLogin
 * @typedef {object} PostLogin
 * @property {string} email email de l'utilisateur
 * @property {string} password mot de passe de l'utilisateur
 */

/**
 * Logged User
 * @typedef {object} LoggedUser détails d'un utilisateur connecté
 * @property {boolean} logged indique si l'utilisateur est connecté
 * @property {integer} id id de l'utilisateur
 * @property {string} pseudo pseudo de l'utilisateur
 * @property {string} firstname prénom de l'utilisateur
 * @property {string} lastname nom de l'utilisateur
 * @property {string} token token de l'utilisateur
 */