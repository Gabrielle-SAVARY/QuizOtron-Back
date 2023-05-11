const { User } = require("../models");
const Score = require("../models/score");

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
  }
};

module.exports = userController;