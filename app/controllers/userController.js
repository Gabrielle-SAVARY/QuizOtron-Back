const { User, Quiz, Score } = require("../models");
const bcrypt = require("bcrypt");

const userController = {
  // Réccupérer les quiz joués par l'utilisateur avec le score obtenu
  getUserHistory : async (req, res) => {
    const { id } = req.user;


    const history = await User.findByPk(id, {
      include: [
        {
          association: 'quizzes_scores',
          through: {
            attributes: ['id','quiz_score']
          }
        }
      ]
    }); 

    res.json(history);
  },

  // Ajouter un quiz à l'historique de l'utilisateur avec le score obtenu
  addUserHistory: async (req, res) => {
    const { id } = req.user;
    const { quiz_id, quiz_score, score_id } = req.body;

    try {
      // Créer ou met à jour une ligne de la table score
       await Score.upsert(
        { id: score_id,
          quiz_score: quiz_score,        
          user_id: id, 
          quiz_id: quiz_id, 
        }        
      );

      // Résultat de la fonction getUserHistory à renvoyer au front
      const history = await User.findByPk(id, {
        include: [
          {
            association: 'quizzes_scores',
            through: {
              attributes: ['id','quiz_score']
            }
          }
        ]
      }); 

      res.json({
        message: "Le quiz a bien été ajouté à votre historique!",
        data : history 
      });

    } catch (error) {
      console.log('error',error);
      res.json({
        message: `erreur : ${error}`
      })
    }
  },

  // Récupérer les quiz favoris de l'utilisateur
  getUserFavorites: async (req, res) => {
    const { id } = req.user;

    const favorites = await User.findByPk(id, {
      include: [
        {
          association: 'favorites',
          include: [
            {
              association: 'level',
            },
            {
              association: 'author',
              attributes: ['pseudo']
            },
            {
              association: 'tags',
              through: {
                attributes: []
              },
            },
          ]
        }
      ]
    });

    res.json(favorites);
  },

  // Ajouter un quiz aux favoris de l'utilisateur
  addFavorite: async (req, res) => {
    const { id } = req.user;
    const { quiz_id } = req.body;

    try {
      const user = await User.findByPk(id);
      const quiz = await Quiz.findByPk(quiz_id);

      await user.addFavorite(quiz);

      res.json({
        message: "Le quiz a bien été ajouté à vos favoris!"
      });

    } catch (error) {
      console.log(error);
    }
  },

  // Supprimer un quiz des favoris de l'utilisateur
  deleteFavorite: async (req, res) => {
    const { id } = req.user;
    const { quiz_id } = req.body;

    try {
      const user = await User.findByPk(id);
      const quiz = await Quiz.findByPk(quiz_id);

      await user.removeFavorite(quiz);

      res.json({
        message: "Le quiz a bien été supprimé de vos favoris!"
      });

    } catch (error) {
      console.log(error);
    }
  },

  // Récupérer les informations de l'utilisateur
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

  // Récupérer les quiz créés par l'utilisateur
  getUserQuizzes: async (req, res) => {
    const { id } = req.user;

    try {
      const userQuizzes = await User.findOne({
        where: {
          id: id
        },
        include: [
          {
            association: 'quizzes',
          }
        ]
      });

      res.json(userQuizzes);

    } catch (error) {
      console.log(error);
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
      console.log(error);
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
      console.log(error);
    }
  },
};

module.exports = userController;