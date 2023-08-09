// Import Router Express
const express = require('express');
const router = express.Router();
// Import Middlewares
const isValid = require('../../middlewares/isValid');
const createQuiz = require('../../validators/createQuiz');
const updateQuiz = require('../../validators/updateQuiz');
// Import controllers
const quizUserController = require('../../controllers/profileController/quiz');

router.get('/', quizUserController.getUserQuizzes);
router.post('/', isValid(createQuiz.createQuizSchema), quizUserController.createQuiz);

/** 
 * PATCH /profile/quiz/{id}
 * @summary Update a quiz
 * @tags Profile
 * @param {string} id.path.required - Quiz id
 * @param {Quiz} request.body.required - Quiz info
 * @return {Quiz} 200 - success response - application/json
*/
router.patch('/:id', isValid(updateQuiz.updateQuizSchema), quizUserController.updateQuiz);

/** 
 * DELETE /profile/quiz/{id}
 * @summary Delete a quiz
 * @tags Profile
 * @param {string} id.path.required - Quiz id
 * @return {Quiz} 200 - success response - application/json
*/
router.delete('/:id', quizUserController.deleteQuiz);

module.exports = router;