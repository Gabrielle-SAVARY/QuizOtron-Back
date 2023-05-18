const Answer = require('./answer');
const Question = require('./question');
const Tag = require('./tag');
const User = require('./user');
const Role = require('./role');
const Level = require('./level');
const Quiz = require('./quiz');
const Score = require('./score');

// relation entre les questions et les réponses
Question.hasMany(Answer, {
  foreignKey: 'question_id',
  as: 'answers',
});

Answer.belongsTo(Question, {
  foreignKey: 'question_id',
  as: 'question',
});


// relation entre les niveaux et les quiz
Level.hasMany(Quiz, {
  foreignKey: 'level_id',
  as: 'quizzes',
});

Quiz.belongsTo(Level, {
  foreignKey: 'level_id',
  as: 'level',
});

// relation entre les quiz et les questions
Quiz.hasMany(Question, {
  foreignKey: 'quiz_id',
  as: 'questions',
});

Question.belongsTo(Quiz, {
  foreignKey: 'quiz_id',
  as: 'quiz',
});

// relation entre les quiz et les utilisateurs
User.hasMany(Quiz, {
  foreignKey: 'user_id',
  as: 'quizzes',
});

Quiz.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'author',
});

// relation entre les utilisateurs et les rôles
Role.hasMany(User, {
  foreignKey: 'role_id',
  as: 'users',
});

User.belongsTo(Role, {
  foreignKey: 'role_id',
  as: 'role',
});

// relation entre les tags et les quiz
Tag.belongsToMany(Quiz, {
  as: 'quizzes',
  through: 'quiz_has_tag',
  foreignKey: 'tag_id',
  otherKey: 'quiz_id',
});

Quiz.belongsToMany(Tag, {
  as: 'tags',
  through: 'quiz_has_tag',
  foreignKey: 'quiz_id',
  otherKey: 'tag_id',
});

// relation entre les utilisateurs et les quiz favoris
Quiz.belongsToMany(User, {
  as: 'favorites',
  through: 'favorite',
  foreignKey: 'quiz_id',
  otherKey: 'user_id',
});

User.belongsToMany(Quiz, {
  as: 'favorites',
  through: 'favorite',
  foreignKey: 'user_id',
  otherKey: 'quiz_id',
});

// relation entre les utilisateurs et les scores obtenus aux quiz
Quiz.belongsToMany(User, {
  as: 'user_scores',
  through: 'score',
  foreignKey: 'quiz_id',
  otherKey: 'user_id',
});

User.belongsToMany(Quiz, {
  as: 'quizzes_scores',
  through: 'score',
  foreignKey: 'user_id',
  otherKey: 'quiz_id',
});

Score.belongsToMany(User, {
  as: 'testscore',
  through: 'score',
  foreignKey: 'quiz_id',
  otherKey: 'user_id',
});

User.belongsToMany(Score, {
  as: 'testing',
  through: 'score',
  foreignKey: 'user_id',
  otherKey: 'quiz_id',
});

Score.belongsToMany(Quiz, {
  as: 'quiz_scores',
  through: 'score',
  foreignKey: 'user_id',
  otherKey: 'quiz_id',
});

Quiz.belongsToMany(Score, {
  as: 'test', 
  through: 'score',
  foreignKey: 'quiz_id',
  otherKey: 'user_id',
})

module.exports = { Answer, Question, Tag, User, Role, Level, Quiz, Score };