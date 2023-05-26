const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');
const isValid = require('../middlewares/isValid');
const {checkToken} = require('../middlewares/jwt');
const createQuiz = require('../validators/createQuiz');
const updateQuiz = require('../validators/updateQuiz');


/**
 * GET /quiz
 * @summary This is the summary or description of the endpoint
 * @tags quiz
 * @return {array<Quiz>} 200 - success response - application/json
 */
router.get('/', quizController.getAllQuizzes);

/**
 * GET /quiz/{id}
 * @summary récuperation d'un quiz
 * @tags quiz
 * @param {string} id.path.required - Quiz id
 * @return {Quiz} 200 - success response - application/json
 */
 router.get('/:id', quizController.getOneQuiz);

/**
 * POST /quiz
 * @summary This is the summary or description of the endpoint
 * @tags quiz
 * @param {Quiz} request.body.required - Quiz info
 * @return {array<Quiz>} 200 - success response - application/json

 */
router.post('/user/create', [isValid(createQuiz.createQuizSchema), checkToken], quizController.createQuiz);
router.patch('/user/update/:id', [isValid(updateQuiz.updateQuizSchema), checkToken], quizController.updateQuiz);
router.delete('/user/delete/:id', checkToken, quizController.deleteQuiz);


module.exports = router;