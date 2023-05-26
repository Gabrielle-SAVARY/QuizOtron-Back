const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');


/**
 * GET /level
 * @summary Get all levels
 * @tags Level
 * @return {array<Level>} 200 - success response - application/json
 */
router.get('/', quizController.getLevels);

/** 
 * GET /level/{name}
 * @summary Get all quizzes by level
 * @tags Level
 * @param {string} name.path.required - Level name
 * @return {array<Level>} 200 - success response - application/json
*/
router.get('/:name', quizController.getQuizzesByLevel);

module.exports = router;