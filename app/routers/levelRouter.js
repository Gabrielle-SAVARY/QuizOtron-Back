const express = require('express');
const levelController = require('../controllers/levelController');
const router = express.Router();

router.get('/', levelController.getLevels);
 //TODO Attention: non utilisé
// router.get('/:name', levelController.getQuizzesByLevel);

module.exports = router;