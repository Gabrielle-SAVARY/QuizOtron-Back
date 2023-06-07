const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tagController');


/**
 * GET /tag
 * @tags Tag
 * @summary Get all tags
 * @return {array<Tag>} 200 - success response - application/json
 * 
 */
 router.get('/', tagController.getTags);

/** 
 * GET /tag/{name}
 * @tags Tag
 * @summary Get all quizzes by tag
 * @param {string} name.path.required - Tag name
 * @return {array<Quiz>} 200 - success response - application/json
*/
 router.get('/:name', tagController.getQuizzesByTag);

module.exports = router;