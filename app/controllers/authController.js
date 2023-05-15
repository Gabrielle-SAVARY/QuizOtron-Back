const bcrypt = require("bcrypt");
const { User } = require("../models");
const { Op } = require("sequelize");
const { getToken } = require("../middlewares/jwt");

const authController = {
    register: async (req, res) => {
      // On récupère les données envoyées dans le formulaire d'inscription
      const {pseudo, email,  firstname, lastname, password} = req.body;

      // On vérifie que l'email n'est pas déjà utilisé
      const emailExists = await User.findOne({
        where: {
          email: {
            // On utilise Op.iLike car on veut que la recherche soit insensible à la casse
            [Op.iLike]: email,
          }
        }
      });

      if (emailExists) {
        return res.status(400).json("Cet email est déjà utilisé");
      }

      // On vérifie que le pseudo n'est pas déjà utilisé
      const pseudoExists = await User.findOne({
        where: {
          pseudo: {
            [Op.iLike]: pseudo,
          }
        }
      });

      if (pseudoExists) {
        return res.status(400).json("Ce pseudo est déjà utilisé");
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
        await User.create(newUser);
        res.json({
          message: "Votre compte a bien été créé",
        });
      } catch (error) {
        res.status(500).json(error);
      }
    },

    login: async (req, res) => {
      // On récupère les données envoyées dans le formulaire de connexion
      const { email, password } = req.body;

      try {
        const user = await User.scope('withPassword').findOne({
          where: {
            email: {
              [Op.iLike]: email,
            }
          }
        })

        // Si la requête ne renvoie aucun utilisateur, c'est que l'email n'existe pas en base de données
        if (!user) {
          return res.status(400).json("Vos identifiants de connexion ne correspondent à aucun compte sur notre système");
        }

        // On compare le mot de passe envoyé dans le formulaire avec le hash enregistré en base de données
        const match = bcrypt.compareSync(password, user.password);

        // Si les mots de passe ne correspondent pas, on renvoie une erreur
        if (!match) {
          return res.status(400).json("Vos identifiants de connexion ne correspondent à aucun compte sur notre système");
        }

        // On renvoie les données de l'utilisateur et le token au client
        res.json({
          logged: true,
          pseudo: user.pseudo,
          firstname: user.firstname,
          lastname: user.lastname,
          token: getToken(user),
        })

      } catch (error) {
        res.status(500).json(error);
      }
    }
};

module.exports = authController;