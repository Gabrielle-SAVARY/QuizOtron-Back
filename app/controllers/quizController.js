const { Quiz, Question, Answer } = require("../models");

const quizController = {
  // Récupérer tous les quiz
  getAllQuizzes: async (req, res) => {
    try {
      //SQL
      // SELECT * FROM quiz
      // INNER JOIN level ON quiz.level_id = level.id
      // INNER JOIN public.user ON quiz.user_id = public.user.id
      // INNER JOIN quiz_has_tag ON quiz.id = quiz_has_tag.quiz_id
      // INNER JOIN tag ON quiz_has_tag.tag_id = tag.id;
      const quizzes = await Quiz.findAll({
        attributes: { exclude: ['level_id', 'user_id'] },
        order: [['id', 'DESC']],
        include: [
          {
            association: 'level',
          },
          {
            association: 'author',
            attributes: ['id', 'pseudo']
          },
          {
            association: 'tags',
            through: {
              attributes: []
            }
          },
        ]
      });
      if (!quizzes) {
        return res.status(404).json({
          statusCode: 404,
          message: 'Impossible de récupérer les quiz'
        })
      }

      res.json(quizzes);

    } catch (error) {
      res
        .status(500)
        .json({
          statusCode: 500,
          message: `ERREUR sur getAllQuizzes() : ${error}`
        });
    }
  },

  // Récupérer un quiz par son id
  getOneQuiz: async (req, res) => {
    try {
      const quizId = req.params.id;
      console.log('TYPE OF REQ PARAMS', req.params);
      console.log('TYPE OF REQ PARAMS', typeof req.params.id);
      console.log('quizId',quizId);

      if (isNaN(quizId)) {
        return res.status(400).json({
          statusCode: 400,
          message: 'Demande invalide -quiz introuvable'
        })
      }

      // SQL
      // SELECT * FROM quiz
      // INNER JOIN level ON quiz.level_id = level.id
      // INNER JOIN public.user ON quiz.user_id = public.user.id
      // INNER JOIN quiz_has_tag ON quiz.id = quiz_has_tag.quiz_id
      // INNER JOIN tag ON quiz_has_tag.tag_id = tag.id
      // WHERE quiz.id = 'quizId';

      const quiz = await Quiz.findByPk(quizId, {
        order: [
          [{ model: Question, as: 'questions' }, { model: Answer, as: 'answers' }, 'id', 'asc']
        ],
        attributes: { exclude: ['level_id', 'user_id'] },
        include: [
          {
            association: 'level',
          },
          {
            association: 'author',
            attributes: ['id', 'pseudo']
          },
          {
            association: 'tags',
            through: {
              attributes: []
            },
          },
          {
            model: Question, as: "questions",
            include: [
              { association: 'answers' }
            ],
          }
        ]
      });

      if (!quiz) {
        return res.status(404).json(
          {
            statusCode: 404,
            message: 'Quiz introuvable'
          }
        )
      } else {
        res.json(quiz);
      }


    } catch (error) {
      res
        .status(500)
        .json({
          statusCode: 500,
          message: `ERREUR sur getOneQuiz() : ${error}`
        });
    }
  },

};

module.exports = quizController;