const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');
const isValid = require('../middlewares/isValid');
const {checkToken} = require('../middlewares/jwt');
const createQuiz = require('../validators/createQuiz');
const updateQuiz = require('../validators/updateQuiz');


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

/**
 * POST /quiz/user/create
 * @summary Create a quiz
 * @tags Quiz
 * @param {Quiz} request.body.required - Quiz info
 * @return {array<Quiz>} 200 - success response - application/json

 */
router.post('/user/create', [isValid(createQuiz.createQuizSchema), checkToken], quizController.createQuiz);

/** 
 * PATCH /quiz/user/update/{id}
 * @summary Update a quiz
 * @tags Quiz
 * @param {string} id.path.required - Quiz id
 * @param {Quiz} request.body.required - Quiz info
 * @return {Quiz} 200 - success response - application/json
*/
router.patch('/user/update/:id', [isValid(updateQuiz.updateQuizSchema), checkToken], quizController.updateQuiz);

/** 
 * DELETE /quiz/user/delete/{id}
 * @summary Delete a quiz
 * @tags Quiz
 * @param {string} id.path.required - Quiz id
 * @return {Quiz} 200 - success response - application/json
*/
router.delete('/user/delete/:id', checkToken, quizController.deleteQuiz);

module.exports = router;