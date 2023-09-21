// Import Router Express
const express = require('express');
const router = express.Router();
// Import Middlewares
const isValid = require('../../middlewares/isValid');
const createQuiz = require('../../validators/createQuiz');
const updateQuiz = require('../../validators/updateQuiz');
// Import controllers
const quizUserController = require('../../controllers/profileController/quiz');

router.get('/', quizUserController.getUserQuizzes); //TODO Attention: non utilisé
router.post('/', isValid(createQuiz.createQuizSchema), quizUserController.createQuiz);
router.patch('/:id', isValid(updateQuiz.updateQuizSchema), quizUserController.updateQuiz);
router.delete('/:id', quizUserController.deleteQuiz);

module.exports = router;