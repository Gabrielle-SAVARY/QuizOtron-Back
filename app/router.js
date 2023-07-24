const express = require('express');

const authController = require('./controllers/authController');

const isValid = require('./middlewares/isValid');
const {checkToken} = require('./middlewares/jwt');

const signup = require('./validators/signup');
const login = require('./validators/login');

const router = express.Router();


// router.use('/profile', checkToken, require('./routers/profileRouter')); // TODO à supprimer si supp averageScore
router.use('/profile', checkToken, require('./routers/profileRouter/')); // TODO a mettre en place si supp averageScore
router.use('/quiz', require('./routers/quizRouter'));

router.use('/tag', require('./routers/tagRouter'));
router.use('/level', require('./routers/levelRouter'));

router.post('/signup', isValid(signup.signupSchema), authController.register);
router.post('/login', isValid(login.loginSchema), authController.login);

module.exports = router;