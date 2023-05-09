const { Quiz } = require("../models");

const quizController = {
  getAllQuizzes: async (req, res) => {
    try {
      const quizzes = await Quiz.findAll({
        include: [
          {association: 'level'},
          {
            association: 'author',
            attributes: ['id', 'pseudo']
          },
          {
            association: 'tags',
          }
        ]
      });
      res.json(quizzes);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.send(error);
    }
  },
};

module.exports = quizController;