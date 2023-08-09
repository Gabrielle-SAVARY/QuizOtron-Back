/** 
 * GET /profile
 * @summary Get user infos
 * @tags Profile
 * @security BearerAuth
 * @return {User} 200 - infos d'un utilisateur
 * @returns {Error} 500 - ERREUR sur getUserInfos() * 
*/

  /** 
 * PATCH /profile
 * @summary Update user infos: soit email et pseudo, soit password
 * @tags Profile
 * @security BearerAuth
 * @param {UserInfosUpdate} request.body.required - User info
 * @returns {Success} 200 - message de succès: Votre compte a bien été mis à jour!
 * @return {Error} 400 - Erreur email ou pseudo déjà utilisé/ ancien mot de passe incorrect
 * @return {Error} 500 - Erreur serveur
  */

/** 
 * DELETE /profile
 * @summary Delete user
 * @tags Profile
 * @security BearerAuth
 * @returns {Success} 200 - message de succès: Votre compte a bien été supprimé!
 * @return {Error} 500 - Erreur serveur
*/