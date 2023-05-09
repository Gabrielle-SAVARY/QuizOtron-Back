const express = require('express');
// const mainController = require('./controllers/mainController');
const quizController = require('./controllers/quizController');

const router = express.Router();

router.get('/quiz', quizController.getAllQuizzes);
router.get('/quiz/:id', quizController.getOneQuiz);
module.exports = router;