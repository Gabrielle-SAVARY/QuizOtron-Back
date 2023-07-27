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
        include: [
          {
            association: 'level',
          },
          {
            association: 'author',
            attributes: ['pseudo']
          },
          {
            association: 'tags',
            through: {
            attributes: []
            }
          },
        ]
      });
      if(!quizzes) {
        return res.status(404).json({
          statusCode : 404,
          message: 'Pas de Quiz en BDD'
        })
      }

      res.json(quizzes);

    } catch (error) {
      res
      .status(500)
      .json({
        statusCode : 500,
        message: `ERREUR sur getAllQuizzes() : ${error}`
      });
    }
  },

  // Récupérer un quiz par son id
  getOneQuiz: async (req, res) => {
    try {
      // Attention revoir pour descructurer le req.params
      
      //SQL
        // SELECT * FROM quiz
        // INNER JOIN level ON quiz.level_id = level.id
        // INNER JOIN public.user ON quiz.user_id = public.user.id
        // INNER JOIN quiz_has_tag ON quiz.id = quiz_has_tag.quiz_id
        // INNER JOIN tag ON quiz_has_tag.tag_id = tag.id
        // WHERE quiz.id = 'quizId';
      
      const quiz = await Quiz.findByPk(req.params.id, {
        order: [
          [{ model: Question, as: 'questions' }, { model: Answer, as: 'answers' }, 'id', 'asc']
        ],
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
            through: {
              attributes: []
            },
          },
          {
            model:Question, as : "questions",
            include: [
              {association: 'answers'}
            ],
          }
        ]
      });

      if(!quiz) {return res.status(404).json(
        {
          statusCode : 404,
          message: 'Quiz introuvable'
        }
        )}
         
      res.json(quiz);

    } catch (error) {
      res
      .status(500)
      .json({
        statusCode : 500,
        message: `ERREUR sur getOneQuiz() : ${error}`
      });
    }
  },

};

module.exports = quizController;