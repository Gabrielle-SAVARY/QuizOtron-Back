//* ROUTE: GET /profile
/** 
 * GET /profile
 * @summary Get user infos
 * @tags Profile
 * @security BearerAuth
 * @return {User} 200 - infos d'un utilisateur
 * @return {Error} 500 - ERREUR sur getUserInfos() * 
*/

//* ROUTE: PATCH /profile
  /** 
 * PATCH /profile
 * @summary Update user infos
 * @description L'utilisateur a le choix entre 2 formulaires: modifier l'email ou le pseudo ou modifier son mot de passe
 * @tags Profile
 * @security BearerAuth
 * @param {UserInfosUpdate} request.body.required - User info
 * @example request - User infos update
 * {
 * "email": "elon-musk@gmail.com",
 * "pseudo": "elon-musk"
 * }
 * @example request - User password update * 
 * {
 * "oldPassword": "123456",
 * "newPassword": "1234567",
 * "confirmPassword": "1234567"
 * }
 * @return {Success} 200 - message de succès: Votre compte a bien été mis à jour!
 * @return {Error} 400 - Erreur email ou pseudo déjà utilisé/ ancien mot de passe incorrect
 * @return {Error} 500 - Erreur serveur
  */
 
//* ROUTE: DELETE /tag
/** 
 * DELETE /profile
 * @summary Delete user
 * @tags Profile
 * @security BearerAuth
 * @return {Success} 200 - message de succès: Votre compte a bien été supprimé!
 * @return {Error} 500 - Erreur serveur
*/