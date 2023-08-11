// const { Op } = require("sequelize");
const { Tag } = require("../models");

const tagController = {

  // Récupérer tous les tags
  getTags: async (req, res) => {
    try {
      // SQL
        // SELECT * FROM tag;
      const tags = await Tag.findAll();

      res.json(tags);

    } catch (error) {
      res
      .status(500)
      .json({
        statusCode : 500,
        message: `ERREUR sur getTags() : ${error}`
      });
    }
  },

  //TODO Attention: pas utilisé
  // // Récupérer tous les quiz par tag
  // getQuizzesByTag: async (req, res) => {
  //   const tagName = req.params.name;

  //   try {
  //     // SQL
  //       // SELECT * FROM tag
  //       // LEFT JOIN quiz_has_tag ON tag.id = quiz_has_tag.tag_id
  //       // LEFT JOIN quiz ON quiz_has_tag.quiz_id = quiz.id
  //       // LEFT JOIN level ON quiz.level_id = level.id
  //       // LEFT JOIN public.user ON quiz.user_id = public.user.id
  //       // WHERE tag.name ILIKE 'tagName';
  //     const tags = await Tag.findAll({
  //       where: {name: {
  //         [Op.iLike]: tagName
  //       }},
  //       include: [
  //         {
  //           association: 'quizzes', include: [
  //             {association: 'level'},
  //             {association: 'author'},
  //             {association: 'tags'},
  //           ]
  //         }
  //       ]
  //     });

  //     res.json(tags);

  //   } catch (error) {
  //     res
  //     .status(500)
  //     .json({
  //       statusCode : 500,
  //       message: `ERREUR sur getQuizzesByTag() : ${error}`
  //     });
  //   }
  // },
};

module.exports = tagController;