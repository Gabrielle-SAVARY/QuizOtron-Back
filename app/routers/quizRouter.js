const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

/**
 * GET /quiz
 * @summary Get all quizzes
 * @tags Quiz
 * @return {array<Quiz>} 200 - success response - application/json
 */
router.get('/', quizController.getAllQuizzes);

/**
 * GET /quiz/{id}
 * @summary Get one quiz
 * @tags Quiz
 * @param {string} id.path.required - Quiz id
 * @return {Quiz} 200 - success response - application/json
 */
 router.get('/:id', quizController.getOneQuiz);


module.exports = router;