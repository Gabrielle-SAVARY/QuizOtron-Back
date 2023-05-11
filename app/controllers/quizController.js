const { Quiz, Tag, Level } = require("../models");
const { Op } = require("sequelize");

const quizController = {
  // Récupérer tous les quiz
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
      res.status(500).send(error);
    }
  },

  // Récupérer un quiz par son id
  getOneQuiz: async (req, res) => {
    try {
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

    } catch (error) {
      res.status(500).send(error);
    }
  },

  // Récupérer tous les tags
  getTags: async (req, res) => {
    try {
      const tags = await Tag.findAll();

      res.json(tags);

    } catch (error) {
      res.status(500).send(error);
    }
  },

  // Récupérer tous les quiz par tag
  getQuizzesByTag: async (req, res) => {
    const tagName = req.params.name;

    try {
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

    } catch (error) {
      res.status(500).send(error);
    }
  },

  // Récupérer tous les niveaux
  getLevels: async (req, res) => {
    try {
      const levels = await Level.findAll();

      res.json(levels);

    } catch (error) {
      res.status(500).send(error);
    }
  },

  // Récupérer tous les quiz par niveau
  getQuizzesByLevel: async (req, res) => {
    const levelName = req.params.name;

    try {
      const levels = await Level.findAll({
        where: {name: {
          [Op.iLike]: levelName
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
  
      res.json(levels);

    } catch (error) {
      res.status(500).send(error);
    }
  },
};

module.exports = quizController;