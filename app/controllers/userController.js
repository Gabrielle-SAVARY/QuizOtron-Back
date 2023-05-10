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

    const history = await User.findByPk(2, {
      include: [
        {
          model: Score,
          as: 'testing',
        }
      ]
    });

    

    

    res.json(history);
  },

  getUserFavorites: async (req, res) => {
    const favorites = await User.findByPk(3, {
      include: [
        {
          association: 'favorites',
        }
      ]
    });

    res.json(favorites);
  },
};

module.exports = userController;