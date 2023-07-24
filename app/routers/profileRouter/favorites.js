// Import Router Express
const express = require('express');
const router = express.Router();

// Import controller
const profileUserController = require('../../controllers/profileController/favorites');

/**
 * GET /profile/favorites
 * @summary Get user favorites
 * @tags Profile
 * @return {array<Quiz>} 200 - success response - application/json
 */
router.get('/', profileUserController.getUserFavorites);

/** 
 * POST /profile/favorites/
 * @summary Add a quiz to user favorites
 * @tags Profile
 * @param {Quiz} request.body.required - Quiz info
 * @return {array<Quiz>} 200 - success response - application/json
*/
router.post('/', profileUserController.addFavorite);

/** 
 * DELETE /profile/favorites/
 * @summary Delete a quiz from user favorites
 * @tags Profile
 * @param {Quiz} request.body.required - Quiz info
 * @return {array<Quiz>} 200 - success response - application/json
*/
router.delete('/', profileUserController.deleteFavorite);


module.exports = router;