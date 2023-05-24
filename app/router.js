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
const createQuiz = require('./validators/createQuiz');
const updateQuiz = require('./validators/updateQuiz');

const router = express.Router();

router.get('/quiz', quizController.getAllQuizzes);
router.get('/quiz/:id', quizController.getOneQuiz);
router.post('/quiz/user/create', [isValid(createQuiz.createQuizSchema), checkToken], quizController.createQuiz);
router.patch('/quiz/user/update/:id', [isValid(updateQuiz.updateQuizSchema), checkToken], quizController.updateQuiz);
router.delete('/quiz/user/delete/:id', checkToken, quizController.deleteQuiz);

router.get('/tag', quizController.getTags);
router.get('/tag/:name', quizController.getQuizzesByTag);

router.get('/level', quizController.getLevels);
router.get('/level/:name', quizController.getQuizzesByLevel);

router.get('/profile', checkToken, userController.getUserInfos);
router.get('/profile/quiz', checkToken, userController.getUserQuizzes);
router.get('/profile/history', checkToken, userController.getUserHistory);
router.get('/profile/favorites', checkToken, userController.getUserFavorites);
router.post('/profile/favorites/add', checkToken, userController.addFavorite);
router.patch('/profile/settings/update', [isValid(userUpdate.updateUserSchema), checkToken], userController.updateUser);
router.delete('/profile/settings/delete', checkToken, userController.deleteUser);

router.post('/signup', isValid(signup.signupSchema), authController.register);
router.post('/login', isValid(login.loginSchema), authController.login);

module.exports = router;