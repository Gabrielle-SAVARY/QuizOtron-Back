const { Op } = require("sequelize");
const { Level } = require("../models");

const levelController = {
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
}

module.exports = levelController;