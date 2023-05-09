const express = require('express');
// const mainController = require('./controllers/mainController');
const quizController = require('./controllers/quizController');

const router = express.Router();

router.get('/', quizController.getAllQuizzes);

module.exports = router;