const { Quiz, Score } = require("../../models");

const historyUserController = {
  // Réccupérer les quiz joués par l'utilisateur avec le score obtenu
  getUserHistory : async (req, res) => {
    const { id } = req.user;

    try {
      // SQL
        // SELECT score.user_id, score.id, score.quiz_score,quiz.id AS quiz_id, quiz.title, quiz.description, quiz.thumbnail from SCORE 
        // INNER JOIN quiz ON score.quiz_id = quiz.id 
        // WHERE  score.user_id = 'id
        // ORDER BY score.id DESC
        // LIMIT 10;
      const userHistory = await Score.findAll({  
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

      res.json(userHistory);   
      
    } catch (error) {
      res.json({
        statusCode: 500,
        message: `ERREUR sur getUserHistory() : ${error}`
      })
    }
    },

  // Ajouter un quiz à l'historique de l'utilisateur avec le score obtenu
  addUserHistory: async (req, res) => {
    const { id } = req.user;
    const { quiz_id, quiz_score} = req.body;

    try {
    // Créer ligne dans la table d'association score
    // SQL
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
    const userHistory = await Score.findAll({  
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
        data : userHistory 
      });

    } catch (error) {
      res.json({
        statusCode: 500,
        message: `ERREUR sur addUserHistory() : ${error}`
      })
    }
  },
  
}


module.exports = historyUserController;