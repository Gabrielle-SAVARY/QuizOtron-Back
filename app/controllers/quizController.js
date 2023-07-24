const { Quiz, Question, Answer } = require("../models");

const quizController = {
  // Récupérer tous les quiz
  getAllQuizzes: async (req, res) => {
    try {
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

      res.json(quizzes);

    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  // Récupérer un quiz par son id
  getOneQuiz: async (req, res) => {
    try {
      // TODO
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

      res.json(quiz);

    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  },

};

module.exports = quizController;