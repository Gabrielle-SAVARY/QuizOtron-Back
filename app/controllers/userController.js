const { User } = require("../models");
const Score = require("../models/score");
const bcrypt = require("bcrypt");

const userController = {
  getUserHistory : async (req, res) => {
    // const favorites = await User.findByPk(1, {
    //   include: [
    //     {
    //       association: 'favorites',
    //     }
    //   ]
    // });

    // res.json(favorites);

    const history = await Score.findAll({
      where: {
        user_id: 1
      },
      include: [
        {
          association: 'quiz_scores',
        }
      ]
    });
    
    res.json(history);
  },

  getUserFavorites: async (req, res) => {
    // TODO: Rectifier
    const favorites = await User.findByPk(3, {
      include: [
        {
          association: 'favorites',
        }
      ]
    });

    res.json(favorites);
  },

  getUserInfos: async (req, res) => {
    const { pseudo } = req.user;

    try {
      const user = await User.findOne({
        where: {
          pseudo: pseudo
        }
      });

      res.json(user);

    } catch (error) {
      console.log(error);
    }

  },

  deleteUser: async (req, res) => {
    const { pseudo } = req.user;

    try {
      const user = await User.findOne({
        where: {
          pseudo: pseudo
        }
      });

      await user.destroy();

      console.log("Votre compte a bien été supprimé");

      res.json({
        message: "Votre compte a bien été supprimé!"
      });

    } catch (error) {
      console.log(error);
    }
  },

  updateUser: async (req, res) => {
    const { id } = req.user;

    try {
      const user = await User.scope('withPassword').findOne({
        where: {
          id: id
        }
      });

      console.log(user);
      console.log('req.user: ', req.user);

      let newUser = req.body;

      // Si l'utilisateur a renseigné un ancien mot de passe, on vérifie qu'il correspond à celui en base de données
      // Et ensuite on hash le nouveau mot de passe
      // TODO: A revoir
      if (newUser.oldPassword && newUser.password || newUser.password) {
        const match = await bcrypt.compare(newUser.oldPassword, user.password);

        if (!match) {
          return res.status(400).json("Le mot de passe est incorrect");
        }
  
        const hash = bcrypt.hashSync(newUser.password, 10);

        newUser.password = hash;
      }
      console.log('newUser: ', newUser);

      await user.update(newUser);
      res.json({
        message: "Votre compte a bien été mis à jour!"
      });

    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = userController;