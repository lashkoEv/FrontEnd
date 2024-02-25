const { quizzesModel } = require('../models/quizzes.model');

function getQuestions(req, res) {
    return res.json(quizzesModel);
}

function getQuestionsFront(req, res) {
    return res.json(quizzesModel.filter(q => q.for === "front-end"));
}

function getQuestionsBack(req, res) {
    return res.json(quizzesModel.filter(q => q.for === "back-end"));
}

function getQuestionsQA(req, res) {
    return res.json(quizzesModel.filter(q => q.for === "qa"));
}

module.exports = {
    getQuestions,
    getQuestionsFront,
    getQuestionsBack,
    getQuestionsQA
}