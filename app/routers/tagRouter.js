const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tagController');

 router.get('/', tagController.getTags);
 router.get('/:name', tagController.getQuizzesByTag);

module.exports = router;