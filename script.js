var timeE1 = document.querySelector(".time");

var secondsLeft = 50;
function setTime () {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeE1.textContent = "Time: " + secondsLeft

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000)
}

function sendMessage() {
    timeE1.textContent = " The test is over ";
}

setTime();


const startButton = document.getElementById('start-btn')
const questionList = document.getElementById('question-container')
const questionEl = document.getElementById('question')
const answerButtonEl = document.getElementById('answer-buttons')
let currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame () {
    startButton.classList.add('hide');
    questionList.classList.remove('hide');
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion () {
    showQuestions(currentQuestionIndex)
}


function showQuestions(question){
    questionEl.innerText = question.question
}


const questions = [
    {
        question: "Upon encountering empty statements, what does the Javascript interpreter do? ",
        answers: [
            {option:"Throws an error",answer:false},
            {option:"Ignores the statements",answer:true},
            {option:"Gives a warning",answer:false},
            {option:"None of the above",answer:false}
        ]
    },
    {
        question: "How can a datatypebe declared to be a constant type?",
        answers: [
            {option:"Const",answer:true},
            {option:"Var",answer:false},
            {option:"Let",answer:false},
            {option:"Constant",answer:false}
        ]
    },
    {
        question: "Which of the following is not a Javascript framework?",
        answers: [
            {option:"Node",answer:false},
            {option:"Vue",answer:false},
            {option:"React",answer:false},
            {option:"Cassandra",answer:true}
        ]
    },
    {
        question: "How to stop an interval timer in Javascript?",
        answers: [
            {option:"clearInterval",answer:true},
            {option:"clearTimer",answer:false},
            {option:"intervalOver",answer:false},
            {option:"None of the above",answer:false}
        ]
    },
]

