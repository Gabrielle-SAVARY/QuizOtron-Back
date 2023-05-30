const { Quiz, Tag, Level, Question, Answer } = require("../models");
const { Op } = require("sequelize");

const quizController = {
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




  createQuiz: async (req, res) => {
    try {
      // On récupère les données du quiz
      const { title, description, thumbnail, level_id, user_id, tag_id } = req.body.quiz;
      console.log('quiz', req.body.quiz);

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
      console.log('quiz', quiz.id);

      const tag = await Tag.findByPk(tag_id);
      console.log('tag', JSON.stringify(tag, null, 2));

      // On associe le tag au quiz
      await quiz.addTags(tag);

      // On récupère les données des questions et des réponses
      const questionsWithAnswers = req.body.questions;
      // console.log('questions avant le map', questionsWithAnswers);

      // On map sur le tableau de questions et réponses
      questionsWithAnswers.map(async (questionData) => {
        const { question, answers } = questionData;
        console.log('answers récupéré dans le map', answers);
        console.log('questiondata', questionData)

        // Création de la question
        const createdQuestion = await Question.create({
          question: question,
          quiz_id: quiz.id,
        });
        // console.log('question en bdd', JSON.stringify(createdQuestion, null, 2));

        // Création des réponses associées à la question avec un bulkCreate pour créer plusieurs réponses en même temps
        // On map sur le tableau de réponses
        const createdAnswers = await Answer.bulkCreate(
          answers.map((answer) => ({
            answer: answer.answer,
            is_valid: answer.is_valid,
            question_id: createdQuestion.id,
          }))
        );
        console.log('answers en bdd', JSON.stringify(createdAnswers, null, 2));
      })


      res.json({
        message: "Le quiz a bien été créé",
      });

    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  },

  deleteQuiz: async (req, res) => {
    const quizId = req.params.id;
    console.log('quizId', quizId);

    try {

      const quiz = await Quiz.findByPk(quizId);
      console.log('quiz', JSON.stringify(quiz, null, 2));

      // Suppression du quiz
      await quiz.destroy();

      res.json({
        message: "Le quiz a bien été supprimé",
      });
    } catch (error) {
      console.log(error);
    }
  },

  updateQuiz: async (req, res) => {
    const quizId = req.params.id;
    const foundQuiz = await Quiz.findByPk(quizId);
    // console.log('foundQuiz', JSON.stringify(foundQuiz, null, 2));

    try {
      // On récupère les données du quiz
      const { title, description, thumbnail, level_id, user_id, tag_id } = req.body.quiz;
      // console.log('quiz', req.body.quiz);

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
      // console.log('quiz', JSON.stringify(quiz, null, 2));

      const tag = await Tag.findByPk(tag_id);
      // console.log('tag', JSON.stringify(tag, null, 2));

      // Retirer l'ancien tag de la table de relation
      await foundQuiz.removeTags(foundQuiz.Tags);
      
      // Associer le nouveau tag au quiz
      await foundQuiz.setTags([tag]);


      // On récupère les données des questions et des réponses
      const questionsWithAnswers = req.body.questions;
      // console.log('questions avant le map', questionsWithAnswers);

      if (questionsWithAnswers) {
      for (const questionData of questionsWithAnswers) {
        const { question, answers } = questionData;
  
        // Recherche de la question à mettre à jour
        const [existingQuestion] = await Question.findAll({
          where: { id: questionData.id },
        });
  
        // console.log('existingQuestion', JSON.stringify(existingQuestion, null, 2));
        // Mise à jour de la question existante
        if (existingQuestion) {
          await existingQuestion.update({ question: question });
        }
        
        for (const answerData of answers) {
          const { id, answer, is_valid } = answerData;

          const existingAnswer = await Answer.findByPk(id);
          // console.log('answer', JSON.stringify(answerData, null, 2));
          console.log('answerData', JSON.stringify(existingAnswer, null, 2));

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