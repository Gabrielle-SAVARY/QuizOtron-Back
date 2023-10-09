const { Sequelize } = require('sequelize');
const { Score } = require("../../models");

const scoreUserController = {

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
      res.json({
        statusCode: 500,
        message: `ERREUR getUserAverageScore() : ${error}`
      })
    }
  },
}

module.exports = scoreUserController;