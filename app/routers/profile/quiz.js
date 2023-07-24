// Import Router Express
const express = require('express');
const router = express.Router();
// Import Middlewares
const isValid = require('../../middlewares/isValid');
const createQuiz = require('../../validators/createQuiz');
const updateQuiz = require('../../validators/updateQuiz');
// Import controllers
const userController = require('../../controllers/userController');
const quizController = require('../../controllers/quizController');


/** 
 * GET /profile/quiz
 * @summary Get user quizzes
 * @tags Profile
 * @security BearerAuth
 * @return {array<Quiz>} 200 - success response - application/json
*/
router.get('/', userController.getUserQuizzes);

/**
 * POST /profile/quiz
 * @summary Create a quiz
 * @tags Quiz
 * @param {Quiz} request.body.required - Quiz info
 * @return {array<Quiz>} 200 - success response - application/json

 */
router.post('/', isValid(createQuiz.createQuizSchema), quizController.createQuiz);

/** 
 * PATCH /profile/quiz/{id}
 * @summary Update a quiz
 * @tags Quiz
 * @param {string} id.path.required - Quiz id
 * @param {Quiz} request.body.required - Quiz info
 * @return {Quiz} 200 - success response - application/json
*/
router.patch('/:id', isValid(updateQuiz.updateQuizSchema), quizController.updateQuiz);

/** 
 * DELETE /profile/quiz/{id}
 * @summary Delete a quiz
 * @tags Quiz
 * @param {string} id.path.required - Quiz id
 * @return {Quiz} 200 - success response - application/json
*/
router.delete('/:id', quizController.deleteQuiz);

module.exports = router;