// Import Router Express
const express = require('express');
const router = express.Router();

// Import controller
const profileUserController = require('../../controllers/profileController/score');

router.get('/', profileUserController.getUserAverageScore);

module.exports = router;