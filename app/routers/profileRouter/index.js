// Import Router Express
const express = require('express');
const router = express.Router();
// Import Middlewares
const isValid = require('../../middlewares/isValid');
const userUpdate = require('../../validators/updateUser');
// Import controllers
const profileController = require('../../controllers/profileController');
// Import Sous-Routes
router.use('/favorites', require('./favorites'));
router.use('/history', require('./history'));
router.use('/quiz', require ('./quiz'));

// Routes Classiques
router.get('/', profileController.getUserInfos);
router.patch('/', isValid(userUpdate.updateUserSchema), profileController.updateUser);
router.delete('/', profileController.deleteUser);

// Routes 2nd version
// router.route('/', checkToken)
//   .get(profileController.getUserInfos)
//   .patch( isValid(userUpdate.userUpdateSchema, profileController.updateUser))
//   .delete(userController.deleteUser);

module.exports = router;