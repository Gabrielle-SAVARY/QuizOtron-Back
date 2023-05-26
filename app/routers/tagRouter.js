const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

/**
 * GET /tag
 * @tags Tag
 * @summary Get all tags
 * @return {array<Tag>} 200 - success response - application/json
 * 
 */
 router.get('/', quizController.getTags);

/** 
 * GET /tag/{name}
 * @tags Tag
 * @summary Get all quizzes by tag
 * @param {string} name.path.required - Tag name
 * @return {array<Quiz>} 200 - success response - application/json
*/
 router.get('/:name', quizController.getQuizzesByTag);

module.exports = router;