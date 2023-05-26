const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const isValid = require('../middlewares/isValid');
const {checkToken} = require('../middlewares/jwt');
const userUpdate = require('../validators/updateUser');


/** 
 * GET /profile
 * @summary Get user infos
 * @tags Profile
 * @return {User} 200 - success response - application/json
*/
router.get('/', checkToken, userController.getUserInfos);

/** 
 * GET /profile/quiz
 * @summary Get user quizzes
 * @tags Profile
 * @return {array<Quiz>} 200 - success response - application/json
*/
router.get('/quiz', checkToken, userController.getUserQuizzes);

/** 
 * GET /profile/history
 * @summary Get user history
 * @tags Profile
 * @return {array<Quiz>} 200 - success response - application/json
*/
router.get('/history', checkToken, userController.getUserHistory);

/**
 * POST /profile/history
 * @summary Add a quiz to user history with score
 * @tags Profile
 * @param {Quiz} request.body.required - Quiz info
 * @return {array<Quiz>} 200 - success response - application/json
 */
router.post('/history', checkToken, userController.addUserHistory);

/**
 * GET /profile/favorites
 * @summary Get user favorites
 * @tags Profile
 * @return {array<Quiz>} 200 - success response - application/json
 */
router.get('/favorites', checkToken, userController.getUserFavorites);

/** 
 * POST /profile/favorites/add
 * @summary Add a quiz to user favorites
 * @tags Profile
 * @param {Quiz} request.body.required - Quiz info
 * @return {array<Quiz>} 200 - success response - application/json
*/
router.post('/favorites/add', checkToken, userController.addFavorite);

/** 
 * DELETE /profile/favorites/delete
 * @summary Delete a quiz from user favorites
 * @tags Profile
 * @param {Quiz} request.body.required - Quiz info
 * @return {array<Quiz>} 200 - success response - application/json
*/
router.delete('/favorites/delete', checkToken, userController.deleteFavorite);

/** 
 * PATCH /profile/settings/update
 * @summary Update user infos
 * @tags Profile
 * @param {User} request.body.required - User info
 * @return {User} 200 - success response - application/json
*/
router.patch('/settings/update', [isValid(userUpdate.updateUserSchema), checkToken], userController.updateUser);

/** 
 * DELETE /profile/settings/delete
 * @summary Delete user
 * @tags Profile
 * @return {User} 200 - success response - application/json
*/
router.delete('/settings/delete', checkToken, userController.deleteUser);

module.exports = router;