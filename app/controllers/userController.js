const { User, Quiz, Score } = require("../models");
const bcrypt = require("bcrypt");
const { Sequelize } = require('sequelize');

const userController = {
  // Réccupérer les quiz joués par l'utilisateur avec le score obtenu
  getUserHistory : async (req, res) => {
    const { id } = req.user;
    try {
			// SELECT score.user_id, score.id, score.quiz_score,quiz.id AS quiz_id, quiz.title, quiz.description, quiz.thumbnail from SCORE 
			// INNER JOIN quiz ON score.quiz_id = quiz.id 
			// WHERE  score.user_id = 'id
			// ORDER BY score.id DESC
			// LIMIT 10;      
   const history = await Score.findAll({  
        where: { user_id: id },
        attributes: ['user_id','id', 'quiz_score', ],
        order: [['id', 'DESC']],
        limit: 10, 
        include: [
          {
            model: Quiz,
            as: 'quiz',
            attributes: ['id', 'title', 'description', 'thumbnail'],
          },
        ], 
      });  

      res.json(history);   
      
    } catch (error) {
      res.json({
        message: `ERREUR : ${error}`
      })      
    }
  },

  // Ajouter un quiz à l'historique de l'utilisateur avec le score obtenu
  addUserHistory: async (req, res) => {
    const { id } = req.user;
    const { quiz_id, quiz_score} = req.body;

    try {
    // Créer ligne dans la table d'association score
    // INSERT INTO score (quiz_score, user_id, quiz_id)
    // VALUES (quiz_score, id, quiz_id);
     await Score.create(
      { 
        quiz_score: quiz_score,        
        user_id: id, 
        quiz_id: quiz_id, 
      }        
    );

    // Fonction getUserHistory pour envoyer les données mises à jour au front
		const history = await Score.findAll({  
			where: { user_id: id },
			attributes: ['user_id','id', 'quiz_score', ],
			order: [['id', 'DESC']],
			limit: 10, 
			include: [
				{
					model: Quiz,
					as: 'quiz',
					attributes: ['id', 'title', 'description', 'thumbnail'],
				},
			], 
		}); 
      res.json({
        message: "Le quiz a bien été ajouté à votre historique!",
        data : history 
      });

    } catch (error) {
      console.log('error',error);
      res.json({
        message: `ERREUR : ${error}`
      })
    }
  },

  // Calcul la moyenne du score de l'utilisateur
  getUserAverageScore: async (req, res) => {
    const { id } = req.user;
    try {
      //SELECT ROUND(AVG(quiz_score), 2) AS averageScore
      //FROM Score
      //WHERE user_id = 'id';
      const averageScore = await Score.findAll({
        where: { user_id: id },
        attributes: [
          [
            Sequelize.fn('ROUND', Sequelize.fn('AVG', Sequelize.col('quiz_score')), 2),
            'averageScore',
          ],
        ],
      });
      res.json(averageScore);
    }
    catch (error) {
      console.log('error',error);
      res.json({
        message: `ERREUR : ${error}`
      })
    }
  },

  // Récupérer les quiz favoris de l'utilisateur
  getUserFavorites: async (req, res) => {
    const { id } = req.user;
		try {
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
		} catch (error) {
			console.log('error',error);
      res.json({
        message: `ERREUR : ${error}`
      })
    }
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
			console.log('error',error);
      res.json({
        message: `ERREUR : ${error}`
      })
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
			console.log('error',error);
      res.json({
        message: `ERREUR : ${error}`
      })
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
			console.log('error',error);
      res.json({
        message: `ERREUR : ${error}`
      })
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
};

module.exports = userController;