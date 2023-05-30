const { Op } = require("sequelize");
const { Tag } = require("../models");

const tagController = {

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
};

module.exports = tagController;