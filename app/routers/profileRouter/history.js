// Import Router Express
const express = require('express');
const router = express.Router();

// Import controller
const historyUserController = require('../../controllers/profileController/history');

router.get('/', historyUserController.getUserHistory);
router.post('/', historyUserController.addUserHistory);

module.exports = router;