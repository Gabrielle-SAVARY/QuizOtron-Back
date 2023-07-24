const { Op } = require("sequelize");
const { Level } = require("../models");

const levelController = {
  // Récupérer tous les niveaux
  getLevels: async (req, res) => {
    try {
      // SQL
        // SELECT * FROM level;
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
      // SQL
        // SELECT * FROM level
        // INNER JOIN quiz ON level.id = quiz.level_id
        // INNER JOIN public.user ON quiz.user_id = public.user.id
        // INNER JOIN quiz_has_tag ON quiz.id = quiz_has_tag.quiz_id
        // INNER JOIN tag ON quiz_has_tag.tag_id = tag.id
        // WHERE level.name = 'levelName';
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
}

module.exports = levelController;