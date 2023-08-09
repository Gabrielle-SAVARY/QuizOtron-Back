const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tagController');

 router.get('/', tagController.getTags);
 //TODO Attention: non utilisé
//  router.get('/:name', tagController.getQuizzesByTag);

module.exports = router;