// Import Router Express
const express = require('express');
const router = express.Router();
// Import Middlewares
const isValid = require('../../middlewares/isValid');
const userUpdate = require('../../validators/updateUser');
// Import controllers
const profileController = require('../../controllers/profileController');
// Import Sous-Routes
router.use('/favorites', require('./favorites'));
router.use('/history', require('./history'));
router.use('/quiz', require ('./quiz'));

// Route Classique
/** 
 * GET /profile
 * @summary Get user infos
 * @tags Profile
 * @security BearerAuth
 * @return {User} 200 - success response - application/json
*/
router.get('/', profileController.getUserInfos);

  /** 
 * PATCH /profile
 * @summary Update user infos
 * @tags Profile
 * @param {User} request.body.required - User info
 * @return {User} 200 - success response - application/json
*/
router.patch('/', isValid(userUpdate.updateUserSchema), profileController.updateUser);

/** 
 * DELETE /profile
 * @summary Delete user
 * @tags Profile
 * @return {User} 200 - success response - application/json
*/
router.delete('/', profileController.deleteUser);


// router.route('/', checkToken)
// /** 
//  * GET /profile
//  * @summary Get user infos
//  * @tags Profile
//  * @security BearerAuth
//  * @return {User} 200 - success response - application/json
// */
//   .get(profileController.getUserInfos)
// /** 
//  * PATCH /profile
//  * @summary Update user infos
//  * @tags Profile
//  * @param {User} request.body.required - User info
//  * @return {User} 200 - success response - application/json
// */
//   .patch( isValid(userUpdate.userUpdateSchema, profileController.updateUser))

// /** 
//  * DELETE /profile
//  * @summary Delete user
//  * @tags Profile
//  * @return {User} 200 - success response - application/json
// */
//   .delete(userController.deleteUser);

module.exports = router;