// Import Router Express
const express = require('express');
const router = express.Router();
// Import Middlewares
const isValid = require('../../middlewares/isValid');
// Import controllers
const userController = require('../../controllers/userController');
const userUpdate = require('../../validators/updateUser');
// Import Sous-Routes
router.use('/favorites', require('./favorites'));
router.use('/history', require('./history'));
router.use('/quiz',require ('./quiz'))

// Route Classique
/** 
 * GET /profile
 * @summary Get user infos
 * @tags Profile
 * @security BearerAuth
 * @return {User} 200 - success response - application/json
*/
router.get('/', userController.getUserInfos);

  /** 
 * PATCH /profile
 * @summary Update user infos
 * @tags Profile
 * @param {User} request.body.required - User info
 * @return {User} 200 - success response - application/json
*/
router.patch('/', isValid(userUpdate.updateUserSchema), userController.updateUser);

/** 
 * DELETE /profile
 * @summary Delete user
 * @tags Profile
 * @return {User} 200 - success response - application/json
*/
router.delete('/', userController.deleteUser);



// router.route('/', checkToken)
// /** 
//  * GET /profile
//  * @summary Get user infos
//  * @tags Profile
//  * @security BearerAuth
//  * @return {User} 200 - success response - application/json
// */
//   .get(userController.getUserInfos)
// /** 
//  * PATCH /profile
//  * @summary Update user infos
//  * @tags Profile
//  * @param {User} request.body.required - User info
//  * @return {User} 200 - success response - application/json
// */
//   .patch( isValid(userUpdate.userUpdateSchema, userController.updateUser))

// /** 
//  * DELETE /profile
//  * @summary Delete user
//  * @tags Profile
//  * @return {User} 200 - success response - application/json
// */
//   .delete(userController.deleteUser);

module.exports = router;