const emailValidator = require("email-validator");

const authController = {
    register: async (req, res) => {
      const {pseudo, email,  firstname, lastname, password, passwordConfirm} = req.body;

      if (!pseudo || !email || !firstname || !lastname || !password || !passwordConfirm) {
        res.status(400);
        res.send("Merci de remplir tous les champs");
      }

      if (password !== passwordConfirm) {
        res.status(400);
        res.send("Les mots de passe ne correspondent pas");
      }

      if (!emailValidator.validate(email)) {
        res.status(400);
        res.send("Merci de renseigner un email valide");
      }


    }
};

module.exports = authController;