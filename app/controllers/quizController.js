const { Quiz, Tag, Question, Answer } = require("../models");

const quizController = {
  // Récupérer tous les quiz
  getAllQuizzes: async (req, res) => {
    try {
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

  // Créer un quiz
  createQuiz: async (req, res) => {
    try {
      // On récupère les données du quiz
      const { title, description, thumbnail, level_id, user_id, tag_id } = req.body.quiz;

      // On attribue les données du quiz à un objet newQuiz
      const newQuiz = {
        title: title,
        description: description,
        thumbnail: thumbnail,
        level_id: level_id,
        user_id: user_id,
      };

      // On crée le quiz en bdd
      const quiz = await Quiz.create(newQuiz);

      const tag = await Tag.findByPk(tag_id);

      // On associe le tag au quiz
      await quiz.addTags(tag);

      // On récupère les données des questions et des réponses
      const questionsWithAnswers = req.body.questions;

      // On map sur le tableau de questions et réponses
      questionsWithAnswers.map(async (questionData) => {
        const { question, answers } = questionData;

        // Création de la question
        const createdQuestion = await Question.create({
          question: question,
          quiz_id: quiz.id,
        });

        // Création des réponses associées à la question avec un bulkCreate pour créer plusieurs réponses en même temps
        // On map sur le tableau de réponses
        await Answer.bulkCreate(
          answers.map((answer) => ({
            answer: answer.answer,
            is_valid: answer.is_valid,
            question_id: createdQuestion.id,
          }))
        );
      });

      res.json({
        message: "Le quiz a bien été créé",
      });

    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  },

  // Supprimer un quiz
  deleteQuiz: async (req, res) => {
    const quizId = req.params.id;

    try {

      const quiz = await Quiz.findByPk(quizId);

      // Suppression du quiz
      await quiz.destroy();

      res.json({
        message: "Le quiz a bien été supprimé",
      });

    } catch (error) {
      console.log(error);
    }
  },

  // Modifier un quiz
  updateQuiz: async (req, res) => {
    const quizId = req.params.id;
    const foundQuiz = await Quiz.findByPk(quizId);

    try {
      // On récupère les données du quiz
      const { title, description, thumbnail, level_id, user_id, tag_id } = req.body.quiz;

      // On attribue les données du quiz à un objet updatedQuiz
      const updatedQuiz = {
        title: title,
        description: description,
        thumbnail: thumbnail,
        level_id: level_id,
        user_id: user_id,
      };

      // On modifie le quiz en bdd
      await Quiz.update(updatedQuiz, {
        where: {
          id: foundQuiz.id,
        },
      });

      const tag = await Tag.findByPk(tag_id);

      // On retire l'ancien tag de la table de relation
      await foundQuiz.removeTags(foundQuiz.Tags);
      
      // On associe le nouveau tag au quiz
      await foundQuiz.setTags([tag]);


      // On récupère les données des questions et des réponses
      const questionsWithAnswers = req.body.questions;

      if (questionsWithAnswers) {
      for (const questionData of questionsWithAnswers) {
        const { question, answers } = questionData;
  
        // Recherche de la question à mettre à jour
        const [existingQuestion] = await Question.findAll({
          where: { id: questionData.id },
        });
  
        // Mise à jour de la question existante
        if (existingQuestion) {
          await existingQuestion.update({ question: question });
        }
        
        for (const answerData of answers) {
          const { id, answer, is_valid } = answerData;

          const existingAnswer = await Answer.findByPk(id);

            await existingAnswer.update({
              answer: answer,
              is_valid: is_valid,
            });
        }
      }
    }

      res.json({
        message: "Le quiz a bien été modifié",
      });
      
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = quizController;