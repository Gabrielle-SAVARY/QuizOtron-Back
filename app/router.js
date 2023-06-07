const express = require('express');
const authController = require('./controllers/authController');
const isValid = require('./middlewares/isValid');
const signup = require('./validators/signup');
const login = require('./validators/login');
const quizRouter = require('./routers/quizRouter');
const profileRouter = require('./routers/profileRouter');
const tagRouter = require('./routers/tagRouter');
const levelRouter = require('./routers/levelRouter');
const router = express.Router();


router.use('/quiz', quizRouter);
router.use('/profile', profileRouter);
router.use('/tag', tagRouter);
router.use('/level', levelRouter);

router.post('/signup', isValid(signup.signupSchema), authController.register);
router.post('/login', isValid(login.loginSchema), authController.login);

module.exports = router;