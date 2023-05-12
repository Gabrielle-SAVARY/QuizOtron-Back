const express = require('express');
const authController = require('./controllers/authController');
// const mainController = require('./controllers/mainController');
const quizController = require('./controllers/quizController');
const userController = require('./controllers/userController');
const { checkToken } = require('./middlewares/jwt');

const router = express.Router();

router.get('/quiz', quizController.getAllQuizzes);
router.get('/quiz/:id', quizController.getOneQuiz);
router.get('/tag', quizController.getTags);
router.get('/tag/:name', quizController.getQuizzesByTag);
router.get('/level', quizController.getLevels);
router.get('/level/:name', quizController.getQuizzesByLevel);
router.get('/profile', checkToken, userController.getUserInfos);
router.get('/profile/history', checkToken, userController.getUserHistory);
router.get('/profile/favorites', checkToken, userController.getUserFavorites);
router.patch('/profile/settings/update', checkToken, userController.updateUser);
router.delete('/profile/settings/delete', checkToken, userController.deleteUser);


router.post('/signup', authController.register);
router.post('/login', authController.login);
module.exports = router;