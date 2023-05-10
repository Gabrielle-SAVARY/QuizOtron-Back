const { Quiz, Tag } = require("../models");

const quizController = {
  getAllQuizzes: async (req, res) => {
    try {
      const quizzes = await Quiz.findAll({
        include: [
          {
            association: 'level',
            attributes: ['name']
          },
          {
            association: 'author',
            attributes: ['pseudo']
          },
          {
            association: 'tags',
            attributes: ['name']
          },
        ]
      });
      res.json(quizzes);
    } catch (error) {
      console.log(error);
      res.status(500);
      res.send(error);
    }
  },

  getOneQuiz: async (req, res) => {
    const quiz = await Quiz.findByPk(req.params.id, {
      include: [
        {
          association: 'level',
          attributes: ['name']
        },
        {
          association: 'author',
          attributes: ['pseudo']
        },
        {
          association: 'tags',
          attributes: ['name']
        },
        {
          association: 'questions',
          include: [
            {association: 'answers'},
            {association: 'good_answer'}
          ]
        }
      ]
    });
    res.json(quiz);
  },

  getTags: async (req, res) => {
    const tags = await Tag.findAll();
    res.json(tags);
  },

};

module.exports = quizController;