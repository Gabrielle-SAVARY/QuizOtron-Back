// Import Router Express
const express = require('express');
const router = express.Router();

// Import controller
const favoritesUserController = require('../../controllers/profileController/favorites');

router.get('/', favoritesUserController.getUserFavorites);
router.post('/', favoritesUserController.addFavorite);
router.delete('/', favoritesUserController.deleteFavorite);

module.exports = router;