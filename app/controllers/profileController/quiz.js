const { Quiz, Tag, Question, Answer, User } = require("../../models");

const quizUserController = {
    //TODO Attention: non utilisé
    // Récupérer les quiz créés par l'utilisateur
    getUserQuizzes: async (req, res) => {
      const { id } = req.user;
  
      try {
        const userQuizzes = await User.findByPk(id,{
          include: [
            {
              association: 'quizzes',
              include: [
                {
                  association: 'tags',
                  through: {
                    attributes: []
                  }
                }
              ]
            }
          ]
        });
  
        res.json(userQuizzes);
  
      } catch (error) {
        res.json({
          statusCode: 500,
          message: `ERREUR sur getUserQuizzes() : ${error}`
        })
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
      // SQL
        // INSERT INTO quiz (title, description, thumbnail, level_id, user_id)
        // VALUES (title, description, thumbnail, level_id, user_id);
      const quiz = await Quiz.create(newQuiz);
      
      // On associe le tag au quiz
      // SQL
        // SELECT * FROM tag WHERE id = tag_id;
        // INSERT INTO quiz_has_tag (quiz_id, tag_id)
      const tag = await Tag.findByPk(tag_id);
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
        message: "Le quiz a été créé avec succès",
      });

    } catch (error) {
      res.json({
        statusCode: 500,
        message: `ERREUR sur createQuiz() : ${error}`
      })
    }
},


// Modifier un quiz
updateQuiz: async (req, res) => {
  const quizId = req.params.id;
  if (isNaN(quizId)) {
    return res.status(400).json({
      statusCode: 400,
      message: 'Demande invalide - quiz introuvable'
    })
  }
  const foundQuiz = await Quiz.findByPk(quizId);  
  if(!foundQuiz) return res.status(400).json({
    statusCode: 400,
    message: "Le quiz n'existe pas" }
    );
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
      message: "Le quiz a bien été modifié.",
    });
    
  } catch (error) {
    res.json({
      statusCode: 500,
      message: `ERREUR sur updateQuiz() : ${error}`
    })
  }
},
// Supprimer un quiz
deleteQuiz: async (req, res) => {
  const quizId = req.params.id;
  if (isNaN(quizId)) {
    return res.status(400).json({
      statusCode: 400,
      message: 'Demande invalide - quiz introuvable'
    })
  }

  try {

    const quiz = await Quiz.findByPk(quizId);

    // Suppression du quiz
    await quiz.destroy();

    res.json({
      message: "Le quiz a bien été supprimé",
    });

  } catch (error) {
    res.json({
      statusCode: 500,
      message: `ERREUR sur deleteQuiz() : ${error}`
    })
  }
},
  
}

module.exports = quizUserController