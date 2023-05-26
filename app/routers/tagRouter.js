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
 router.get('/:name', quizController.getQuizzesByTag);

module.exports = router;