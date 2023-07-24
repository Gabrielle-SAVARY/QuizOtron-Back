const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Les routes de mon profil
// GET /profile/
router.use('/',require ('./profile/'))

/** 
 * GET /profile/score
 * @summary Get user Global score/average score
 * @tags Profile
 * @security BearerAuth
 * @return {objet} 200 - success response - application/json //TODO retourne un number (moyenne calculée par la requête)
*/
router.get('/score', userController.getUserAverageScore);




module.exports = router;