const express = require('express');
const authController = require('./controllers/authController');
// const mainController = require('./controllers/mainController');
const quizController = require('./controllers/quizController');

const router = express.Router();

router.get('/quiz', quizController.getAllQuizzes);
router.get('/quiz/:id', quizController.getOneQuiz);

router.post('/signup', authController.register);
module.exports = router;