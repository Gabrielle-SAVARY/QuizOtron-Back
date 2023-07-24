const { User } = require("../../models");
const bcrypt = require("bcrypt");

const userController = {
  // Récupérer les informations de l'utilisateur
  getUserInfos: async (req, res) => {
    const { pseudo } = req.user;
    try {
      const user = await User.findOne({
        where: { pseudo },
        // include: [
        //   {
        //     association: 'quizzes',
        //   },
        //   {
        //     association: 'favorites',
        //     include: [
        //       {
        //         association: 'level',
        //       },
        //       {
        //         association: 'author',
        //         attributes: ['pseudo'],
        //       },
        //       {
        //         association: 'tags',
        //         through: {
        //           attributes: [],
        //         },
        //       },
        //     ],
        //   },
        // ],
      });
      res.json(user);
    } catch (error) {
			console.log('error',error);
      
      // res.status(500).json({
      //  message : 'Erreur lors du chargement des données'
      // })
      res.json({
        message: `ERREUR : ${error}`
      })
    }
  },

  // Mettre à jour les informations de l'utilisateur
  updateUser: async (req, res) => {
    const { id } = req.user;

    try {
      const user = await User.scope('withPassword').findOne({
        where: {
          id: id
        }
      });

      let newUser = req.body;

      if (newUser.password) {
        // Si l'utilisateur a renseigné un ancien mot de passe, on vérifie qu'il correspond à celui en base de données
        // Et ensuite on hash le nouveau mot de passe
        const match = await bcrypt.compare(newUser.oldPassword, user.password);

        if (!match) {
          return res.status(400).json("Le mot de passe est incorrect");
        }

        const hash = bcrypt.hashSync(newUser.password, 10);

        newUser.password = hash;
      }

      await user.update(newUser);
      res.json({
        message: "Votre compte a bien été mis à jour!"
      });

    } catch (error) {
			console.log('error',error);
      res.json({
        message: `ERREUR : ${error}`
      })
    }
  },

  // Supprimer un utilisateur
  deleteUser: async (req, res) => {
    const { pseudo } = req.user;

    try {
      const user = await User.findOne({
        where: {
          pseudo: pseudo
        }
      });

      await user.destroy();

      res.json({
        message: "Votre compte a bien été supprimé!"
      });

    } catch (error) {
			console.log('error',error);
      res.json({
        message: `ERREUR : ${error}`
      })
    }
  },
};

module.exports = userController;

// TODO s'occuper du score
// const { Sequelize } = require('sequelize');
// const { Score } = require("../models");

  // // Calcul la moyenne du score de l'utilisateur
  // getUserAverageScore: async (req, res) => {
  //   const { id } = req.user;
  //   try {
  //     //SELECT ROUND(AVG(quiz_score), 2) AS averageScore
  //     //FROM Score
  //     //WHERE user_id = 'id';
  //     const averageScore = await Score.findAll({
  //       where: { user_id: id },
  //       attributes: [
  //         [
  //           Sequelize.fn('ROUND', Sequelize.fn('AVG', Sequelize.col('quiz_score')), 2),
  //           'averageScore',
  //         ],
  //       ],
  //     });
  //     console.log('averageScore',averageScore);
  //     console.log('averageScore TYPE',typeof averageScore);

  //     res.json(averageScore);
  //   }
  //   catch (error) {
  //     console.log('error',error);
  //     res.json({
  //       message: `ERREUR : ${error}`
  //     })
  //   }
  // },