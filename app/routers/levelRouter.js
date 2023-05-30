const express = require('express');
const levelController = require('../controllers/levelController');
const router = express.Router();


/**
 * GET /level
 * @summary Get all levels
 * @tags Level
 * @return {array<Level>} 200 - success response - application/json
 */
router.get('/', levelController.getLevels);

/** 
 * GET /level/{name}
 * @summary Get all quizzes by level
 * @tags Level
 * @param {string} name.path.required - Level name
 * @return {array<Level>} 200 - success response - application/json
*/
router.get('/:name', levelController.getQuizzesByLevel);

module.exports = router;