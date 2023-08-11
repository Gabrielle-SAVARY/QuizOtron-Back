// Import Router Express
const express = require('express');
const router = express.Router();

// Import controller
const profileUserController = require('../../controllers/profileController/favorites');

router.get('/', profileUserController.getUserFavorites);
router.post('/', profileUserController.addFavorite);
router.delete('/', profileUserController.deleteFavorite);

module.exports = router;