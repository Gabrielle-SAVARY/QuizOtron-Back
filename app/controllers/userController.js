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

    const user = await User.findOne({
      where: {
        pseudo: pseudo
      }
    });
    res.json(user);
  }
};

module.exports = userController;