var start = document.getElementById('start');
var game = document.getElementById('main');
var winCount = document.getElementById("win");
var loseCount = document.getElementById("lose");
var timer = document.getElementById("timer");
var notes = document.getElementById("notes");

var optionA = document.querySelector(".optionA");
var optionB = document.querySelector(".optionB");
var optionC = document.querySelector(".optionC");
var optionD = document.querySelector(".optionD");

function getSum(total, num) {
    return total + Math.round(num);
  }

function runOutOfTime() {
    notes.innerHTML = "You ran out of time! Game Over!!!";
}

var countDown = 180;
var timerMajor = setInterval(function (){
    countDown--;
    timer.textContent = countDown + " seconds left till you lose!";
    if (countDown === 0){
        clearInterval(timerMajor);
        runOutOfTime();
    }
} ,1000);

function wrongChoice() {
    countDown = countDown - 20;
}

document.getElementById('start').onclick = function() {
    game.textContent = "What does HTML stand for?";
    optionA.textContent = "Hypertext Markup Language";
    optionB.textContent = "Hypetext Markup Linguine";
    optionC.textContent = "Hypotext Makeup Language";
    optionD.textContent = "Hyper Text Makeup Language";
};
var wrongAnswer = [optionD, optionC, optionB];
for (let i = 0; i < wrongAnswer.length; i++) {
    const element = wrongAnswer[i];
    wrongAnswer[i].onclick = function(){
        notes.textContent = "WRONG!";
        wrongChoice();
    };
};
optionA.onclick = function() {
    notes.textContent = "";
    winCount.textContent = "correct! " + countDown + " point(s) are accumulated";
    localStorage.setItem("score1", countDown);

    document.getElementById('start').onclick = function() {
        winCount.textContent = "";
        game.textContent = "What does JSON stand for?";
        optionA.textContent = "Java's Son";
        optionB.textContent = "Javis is On";
        optionC.textContent = "JavaScript Object Notation";
        optionD.textContent = "JavaScript Orientation Notation";
    };
    var wrongAnswer = [optionA, optionB, optionD];
    for (let i = 0; i < wrongAnswer.length; i++) {
        const element = wrongAnswer[i];
        wrongAnswer[i].onclick = function(){
        notes.textContent = "WRONG!";
        wrongChoice();
    };
};
    optionC.onclick = function() {
        notes.textContent = "";
        var sumPrev = [localStorage.getItem("score1"), countDown];
        var scoreTwo = sumPrev.reduce(getSum, 0);
        winCount.textContent = "correct! " + scoreTwo + " point(s) are accumulated!";
        localStorage.setItem("score2", scoreTwo);

        document.getElementById('start').onclick = function() {
            winCount.textContent = "";
            game.textContent = "What does CSS stand for?";
            optionA.textContent = "Color & Style Sheets";
            optionB.textContent = "Computer Style Sheets";
            optionC.textContent = "Chinese Styles Rule";
            optionD.textContent = "Cascading Style Sheets ";
        };
        var wrongAnswer = [optionA, optionB, optionC];
        for (let i = 0; i < wrongAnswer.length; i++) {
            const element = wrongAnswer[i];
            wrongAnswer[i].onclick = function(){
            notes.textContent = "WRONG!";
            wrongChoice();
            };
        };
        optionD.onclick = function() {
            notes.textContent = "";
            var sumPrev2 = [localStorage.getItem("score2"), countDown];
            var scoreThree = sumPrev2.reduce(getSum, 0);
            winCount.textContent = "correct! " + scoreThree + " point(s) are accumulated!";
            localStorage.setItem("score3", scoreThree);

            document.getElementById('start').onclick = function() {
                winCount.textContent = "";
                game.textContent = "What does API stand for?";
                optionA.textContent = "Application Programming Interface";
                optionB.textContent = "Analyzing Program Interaction";
                optionC.textContent = "Apple orange and ice cream";
                optionD.textContent = "Asian Population Increase";
            };
            var wrongAnswer = [optionC, optionB, optionD];
            for (let i = 0; i < wrongAnswer.length; i++) {
                const element = wrongAnswer[i];
                wrongAnswer[i].onclick = function(){
                notes.textContent = "WRONG!";
                wrongChoice();
                };
            };
            optionA.onclick = function() {
                notes.textContent = "";
                var sumPrev3 = [localStorage.getItem("score3"), countDown];
                var scoreFour = sumPrev3.reduce(getSum, 0);
                winCount.textContent = "correct! " + scoreFour + " point(s) are accumulated!";
                localStorage.setItem("score4", scoreFour);

                document.getElementById('start').onclick = function() {
                    winCount.textContent = "";
                    game.textContent = "How many hours [per week] dose a bootcamp student usually need to practice coding outside the class?";
                    optionA.textContent = "0";
                    optionB.textContent = "10";
                    optionC.textContent = "25";
                    optionD.textContent = "80";
                };
                var wrongAnswer = [optionA, optionB, optionD];
                for (let i = 0; i < wrongAnswer.length; i++) {
                    const element = wrongAnswer[i];
                    wrongAnswer[i].onclick = function(){
                    notes.textContent = "WRONG!";
                    wrongChoice();
                    };
                };
                optionC.onclick = function() {
                    notes.textContent = "";
                    var sumPrev4 = [localStorage.getItem("score4"), countDown];
                    var scoreFive = sumPrev4.reduce(getSum, 0);
                    winCount.textContent = "correct! " + scoreFive + " point(s) are accumulated!";
                    localStorage.setItem("score5", scoreFive);
                }
            }
        }
    }
}
