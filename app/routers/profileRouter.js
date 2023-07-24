const express = require('express');
const router = express.Router();

// Les routes de mon profil
// GET /profile/
router.use('/',require ('./profileRouter/'))

// /** 
//  * GET /profile/score
//  * @summary Get user Global score/average score
//  * @tags Profile
//  * @security BearerAuth
//  * @return {objet} 200 - success response - application/json //TODO retourne un number (moyenne calculée par la requête)
// */
// const profileController = require('../controllers/profileController');
// router.get('/score', profileController.getUserAverageScore);




module.exports = router;