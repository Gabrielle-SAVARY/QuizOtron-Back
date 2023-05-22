const express = require('express');
const authController = require('./controllers/authController');
// const mainController = require('./controllers/mainController');
const quizController = require('./controllers/quizController');
const userController = require('./controllers/userController');
const isValid = require('./middlewares/isValid');
const { checkToken } = require('./middlewares/jwt');
const signup = require('./validators/signup');
const login = require('./validators/login');
const userUpdate = require('./validators/updateUser');

const router = express.Router();

router.get('/quiz', quizController.getAllQuizzes);
router.get('/quiz/:id', quizController.getOneQuiz);
router.post('/quiz/user/create',  quizController.createQuiz);
router.put('/quiz/user/update/:id', quizController.updateQuiz);
router.delete('/quiz/user/delete/:id', quizController.deleteQuiz);

router.get('/tag', quizController.getTags);
router.get('/tag/:name', quizController.getQuizzesByTag);

router.get('/level', quizController.getLevels);
router.get('/level/:name', quizController.getQuizzesByLevel);

router.get('/profile', checkToken, userController.getUserInfos);
router.get('/profile/history', checkToken, userController.getUserHistory);
router.get('/profile/favorites', checkToken, userController.getUserFavorites);
router.patch('/profile/settings/update', [isValid(userUpdate.updateUserSchema), checkToken], userController.updateUser);
router.delete('/profile/settings/delete', checkToken, userController.deleteUser);

router.post('/signup', isValid(signup.signupSchema), authController.register);
router.post('/login', isValid(login.loginSchema), authController.login);

module.exports = router;