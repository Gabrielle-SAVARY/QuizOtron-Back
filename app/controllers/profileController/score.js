// TODO s'occuper du score
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
      console.log('averageScore',averageScore);
      console.log('averageScore TYPE',typeof averageScore);

      res.json(averageScore);
    }
    catch (error) {
      console.log('error',error);
      res.json({
        message: `ERREUR : ${error}`
      })
    }
  },
}

module.exports = scoreUserController;