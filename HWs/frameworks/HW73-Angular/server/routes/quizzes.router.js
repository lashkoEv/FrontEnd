const quizzesRouter = require('express').Router();

const { getQuestions, getQuestionsBack, getQuestionsFront, getQuestionsQA } = require('../controllers/quizzes.controller');

quizzesRouter.get("/quizzes/back-end", getQuestionsBack);
quizzesRouter.get("/quizzes/front-end", getQuestionsFront);
quizzesRouter.get("/quizzes/qa", getQuestionsQA);

quizzesRouter.get("/quizzes", getQuestions);


module.exports = {
    quizzesRouter
}