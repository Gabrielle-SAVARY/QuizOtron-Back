const express = require('express');
const router = express.Router();

// Les routes de mon profil
router.use('/',require ('./profileRouter/'))


// const profileController = require('../controllers/profileController');
// router.get('/score', profileController.getUserAverageScore);

module.exports = router;