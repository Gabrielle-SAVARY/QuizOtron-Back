const emailValidator = require("email-validator");
const bcrypt = require("bcrypt");
const { User } = require("../models");

const authController = {
    register: async (req, res) => {
      // On récupère les données envoyées dans le formulaire
      const {pseudo, email,  firstname, lastname, password, passwordConfirm} = req.body;

      // On vérifie que tous les champs sont remplis
      if (!pseudo || !email || !firstname || !lastname || !password || !passwordConfirm) {
        return res.status(400).json("Merci de remplir tous les champs");
      }

      // On vérifie que les mots de passe correspondent
      if (password !== passwordConfirm) {
        return res.status(400).json("Les mots de passe ne correspondent pas");
      }

      // On vérifie que l'email est valide
      if (!emailValidator.validate(email)) {
        return res.status(400).json("Merci de renseigner un email valide");
      }

      // On hash le mot de passe avant de l'enregistrer en base de données
      const hash = bcrypt.hashSync(password, 10);

      // On crée un nouvel utilisateur
      const newUser = {
        pseudo: pseudo,
        email: email,
        firstname: firstname,
        lastname: lastname,
        password: hash,
        role_id: 1,
      };

      try {
        const user = await User.create(newUser);
        res.redirect('/login');
      } catch (error) {
        res.status(500).json(error);
      }
    },

    login: async (req, res) => {
      
    }
};

module.exports = authController;