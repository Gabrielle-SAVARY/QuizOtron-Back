const { Quiz, Tag, Level, Question, Answer } = require("../models");
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
              {association: 'answers'}
            ]
          }
        ]
      });

      res.json(quiz);

    } catch (error) {
      res.status(500).send(error);
      console.log(error);
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
      await quiz.addTag(tag);

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
};

module.exports = quizController;