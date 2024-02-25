const quizzesModel = [
    {
        for: "front-end",
        question: "What is an HTML?",
        answers: [
            {
                letter: "a",
                answer: "It's a programming language!",
                isCorrect: false
            },
            {
                letter: "b",
                answer: "It's a new way to implement back-end!",
                isCorrect: false
            },
            {
                letter: "c",
                answer: "There aren't correct answers!",
                isCorrect: false
            },
            {
                letter: "d",
                answer: "It's a hyper text mark-up language!",
                isCorrect: true
            },
        ]
    },
    {
        for: "front-end",
        question: "What is a CSS?",
        answers: [
            {
                letter: "a",
                answer: "Cascade stylesheet table!",
                isCorrect: true
            },
            {
                letter: "b",
                answer: "It's a new way to implement ServerSideRendering!",
                isCorrect: false
            },
            {
                letter: "c",
                answer: "There aren't correct answers!",
                isCorrect: false
            },
            {
                letter: "d",
                answer: "I want to drink at home alone!",
                isCorrect: true
            },
        ]
    },
    {
        for: "front-end",
        question: "What is a JS?",
        answers: [
            {
                letter: "a",
                answer: "It's a programming language!",
                isCorrect: true
            },
            {
                letter: "b",
                answer: "It's a new way to implement CSS!",
                isCorrect: false
            },
            {
                letter: "c",
                answer: "There aren't correct answers!",
                isCorrect: false
            },
            {
                letter: "d",
                answer: "It's a piece of stit!",
                isCorrect: false
            },
        ]
    },
    {
        for: "back-end",
        question: "What is a Node.js?",
        answers: [
            {
                letter: "a",
                answer: "It's a programming language!",
                isCorrect: false
            },
            {
                letter: "b",
                answer: "It's a new way to implement JS!",
                isCorrect: false
            },
            {
                letter: "c",
                answer: "There aren't correct answers!",
                isCorrect: false
            },
            {
                letter: "d",
                answer: "There is a JS environment, which give us a V8 engine as a runtime to execute js!",
                isCorrect: false
            },
        ]
    },
    {
        for: "qa",
        question: "What is a SDLC?",
        answers: [
            {
                letter: "a",
                answer: "It's a programming language!",
                isCorrect: false
            },
            {
                letter: "b",
                answer: "It's a new way to implement JS!",
                isCorrect: false
            },
            {
                letter: "c",
                answer: "There is a soft development life cycle!",
                isCorrect: true
            },
            {
                letter: "d",
                answer: "There is a JS environment, which give us a V8 engine as a runtime to execute js!",
                isCorrect: false
            },
        ]
    }
]

module.exports = {
    quizzesModel
}