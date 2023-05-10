const express = require('express');
const authController = require('./controllers/authController');
// const mainController = require('./controllers/mainController');
const quizController = require('./controllers/quizController');
const userController = require('./controllers/userController');

const router = express.Router();

router.get('/quiz', quizController.getAllQuizzes);
router.get('/quiz/:id', quizController.getOneQuiz);
router.get('/tag', quizController.getQuizzesByTag);
router.get('/profile/history', userController.getUserHistory);
router.get('/profile/favorites', userController.getUserFavorites);

router.post('/signup', authController.register);
router.post('/login', authController.login);
module.exports = router;