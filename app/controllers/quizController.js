const { Quiz, Tag, Level } = require("../models");
const { Op } = require("sequelize");

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

  getQuizzesByTag: async (req, res) => {
    const tagName = req.params.name;

    const tags = await Tag.findAll({
      where: {name: {
        [Op.iLike]: tagName
      }},
      include: [
        {
          association: 'quizzes', include: [
            {association: 'level'},
            {association: 'author'},
            {association: 'tags'},
          ]
        }
      ]
    });
    res.json(tags);
  },

  getLevels: async (req, res) => {
    const levels = await Level.findAll();
    res.json(levels);
  },

};

module.exports = quizController;