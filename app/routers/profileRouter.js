const express = require('express');
const router = express.Router();

// Les routes de mon profil
router.use('/',require ('./profileRouter/'))


module.exports = router;