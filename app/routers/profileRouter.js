const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const isValid = require('../middlewares/isValid');
const {checkToken} = require('../middlewares/jwt');
const userUpdate = require('../validators/updateUser');


router.get('/', checkToken, userController.getUserInfos);
router.get('/quiz', checkToken, userController.getUserQuizzes);
router.get('/history', checkToken, userController.getUserHistory);
router.post('/history', checkToken, userController.addUserHistory);

router.get('/favorites', checkToken, userController.getUserFavorites);
router.post('/favorites/add', checkToken, userController.addFavorite);
router.delete('/favorites/delete', checkToken, userController.deleteFavorite);

router.patch('/settings/update', [isValid(userUpdate.updateUserSchema), checkToken], userController.updateUser);
router.delete('/settings/delete', checkToken, userController.deleteUser);

module.exports = router;