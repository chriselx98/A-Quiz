var jsQuestions = [
    {
        question: "How does this function work?",
        answers: {
            a: 's',
            b: 'b',
            c: '115'
        },
        correctAnswer: 'b'
    },
    {
        question: "how do you pull an element?"
        answers: {
            a: "q",
            b: "w",
            c: "e"
        },
        correctAnswer: 'c'
    },
]

var timeE1 = document.querySelector(".time");
var mainE1 = document.getElementById("main");

var secondsLeft = 180;
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

