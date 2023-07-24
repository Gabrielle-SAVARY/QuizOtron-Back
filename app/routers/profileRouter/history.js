// Import Router Express
const express = require('express');
const router = express.Router();

// Import controller
const historyUserController = require('../../controllers/profileController/history');
/** 
 * GET /profile/history
 * @summary Get user history
 * @tags Profile
 * @security BearerAuth
 * @return {array<Quiz>} 200 - success response - application/json
*/
router.get('/history', historyUserController.getUserHistory);

/**
 * POST /profile/history
 * @summary Add a quiz to user history with score
 * @tags Profile
 * @security BearerAuth
 * @param {PostScore} request.body.required - Quiz info
 * @return {array<Quiz>} 200 - success response - application/json
 */
router.post('/history', historyUserController.addUserHistory);


module.exports = router;