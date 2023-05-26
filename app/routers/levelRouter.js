const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');


router.get('/', quizController.getLevels);
router.get('/:name', quizController.getQuizzesByLevel);

module.exports = router;