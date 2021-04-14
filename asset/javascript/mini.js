var start = document.getElementById('start');
var game = document.getElementById('main');
var winCount = document.getElementById("win");
var loseCount = document.getElementById("lose");
var timer = document.getElementById("timer");
var notes = document.getElementById("notes");
var warning = document.getElementById("warning");
var final = document.getElementById("final");
var score = document.getElementById("score");
var form = document.querySelector(".form");
var rank = document.querySelector(".rank")
var header = document.querySelector(".header")
var optionA = document.querySelector(".optionA");
var optionB = document.querySelector(".optionB");
var optionC = document.querySelector(".optionC");
var optionD = document.querySelector(".optionD");
var img = document.getElementsByClassName("winImage");
var loser = "You ran out of time! Game Over!!!";

/* my calculator */
function getSum(total, num) {
    return total + Math.round(num);
};

function runOutOfTime() {
    optionB.textContent = "Try Again?";
    optionB.setAttribute("style", "background-color: black");
    header.innerHTML = loser.fontcolor("red");
    notes.innerHTML = loser.fontcolor("red");
    var hiddenArray = [optionC, optionD, optionA, start, timer, game, warning];
    for (let i = 0; i < hiddenArray.length; i++) {
        hiddenArray[i].style.visibility = 'hidden';
    };
    optionB.onclick = function(){
            location.reload();
    };
};

/* timer */
var countDown = 110;
var timerMajor = setInterval(function (){
    countDown--;
    timer.textContent = countDown + " seconds are left";
    if (countDown <= 0){
        clearInterval(timerMajor);
        runOutOfTime();
    }
} ,1000);

/* time deduction */
function wrongChoice() {
    countDown = countDown - 20;
};

function wrongChoiceMajor() {
    countDown = countDown - 50
};

/* main codes start here */

var hiddenArray = [optionA, optionB, optionC, optionD, game, timer];
for (let i = 0; i < hiddenArray.length; i++) {
    hiddenArray[i].style.visibility = 'hidden';
};

rank.textContent = "The previous player, " + localStorage.getItem("person") + ", with a score of " + localStorage.getItem("score5");

document.getElementById('start').onclick = function() {
    var hiddenArray = [optionA, optionB, optionC, optionD, game, timer];
for (let i = 0; i < hiddenArray.length; i++) {
    hiddenArray[i].style.visibility = 'visible';
};
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
        element.setAttribute("style", "text-decoration: line-through; background-color: grey;");
        notes.textContent = "WRONG! Find the right one, so you can move on!";
        wrongChoice();
    };
};
optionA.onclick = function() {
    optionA.setAttribute("style", "border-radius: 50%;");
    notes.textContent = "";
    winCount.textContent = "correct! " + countDown + " point(s) are accumulated! Press 'Next' to Continue!";
    localStorage.setItem("score1", countDown);
    var hiddenArray = [optionB, optionC, optionD];
    for (let i = 0; i < hiddenArray.length; i++) {
        hiddenArray[i].style.visibility = 'hidden';
    };

    document.getElementById('start').onclick = function() {
        var hiddenArray = [optionA, optionB, optionC, optionD];
        for (let i = 0; i < hiddenArray.length; i++) {
            hiddenArray[i].removeAttribute("style", "text-decoration: line-through; background-color: grey;");
            hiddenArray[i].style.visibility = 'visible';
        };
        optionA.setAttribute("style", "border-radius: 0%;");
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
        element.setAttribute("style", "text-decoration: line-through; background-color: grey;");
        notes.textContent = "WRONG! Find the right one, so you can move on!";
        wrongChoice();
    };
};
    optionC.onclick = function() {
        optionC.setAttribute("style", "border-radius: 50%;");
        notes.textContent = "";
        var sumPrev = [localStorage.getItem("score1"), countDown];
        var scoreTwo = sumPrev.reduce(getSum, 0);
        winCount.textContent = "correct! " + scoreTwo + " point(s) are accumulated! Press 'Next' to Continue!";
        localStorage.setItem("score2", scoreTwo);
        var hiddenArray = [optionB, optionA, optionD];
        for (let i = 0; i < hiddenArray.length; i++) {
            hiddenArray[i].style.visibility = 'hidden';
        };

        document.getElementById('start').onclick = function() {
            var hiddenArray = [optionA, optionB, optionC, optionD];
            for (let i = 0; i < hiddenArray.length; i++) {
                hiddenArray[i].removeAttribute("style", "text-decoration: line-through; background-color: grey;");
                hiddenArray[i].style.visibility = 'visible';
            };
            optionC.setAttribute("style", "border-radius: 0%;");
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
            element.setAttribute("style", "text-decoration: line-through; background-color: grey;");
            notes.textContent = "WRONG! Find the right one, so you can move on!";
            wrongChoice();
            };
        };
        optionD.onclick = function() {
            optionD.setAttribute("style", "border-radius: 50%;");
            notes.textContent = "";
            var sumPrev2 = [localStorage.getItem("score2"), countDown];
            var scoreThree = sumPrev2.reduce(getSum, 0);
            winCount.textContent = "correct! " + scoreThree + " point(s) are accumulated! Press 'Next' to Continue!";
            localStorage.setItem("score3", scoreThree);
            var hiddenArray = [optionB, optionC, optionA];
            for (let i = 0; i < hiddenArray.length; i++) {
                hiddenArray[i].style.visibility = 'hidden';
            };

            document.getElementById('start').onclick = function() {
                var hiddenArray = [optionA, optionB, optionC, optionD];
                for (let i = 0; i < hiddenArray.length; i++) {
                    hiddenArray[i].removeAttribute("style", "text-decoration: line-through; background-color: grey;");
                    hiddenArray[i].style.visibility = 'visible';
                };
                optionD.setAttribute("style", "border-radius: 0%;");
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
                element.setAttribute("style", "text-decoration: line-through; background-color: grey;");
                notes.textContent = "WRONG! Find the right one, so you can move on!";
                wrongChoice();
                };
            };
            optionA.onclick = function() {
                optionA.setAttribute("style", "border-radius: 50%;");
                notes.textContent = "";
                var sumPrev3 = [localStorage.getItem("score3"), countDown];
                var scoreFour = sumPrev3.reduce(getSum, 0);
                winCount.textContent = "correct! " + scoreFour + " point(s) are accumulated! Press 'Next' to Continue!";
                localStorage.setItem("score4", scoreFour);
                var hiddenArray = [optionB, optionC, optionD];
                for (let i = 0; i < hiddenArray.length; i++) {
                    hiddenArray[i].style.visibility = 'hidden';
                };

                document.getElementById('start').onclick = function() {
                    var hiddenArray = [optionA, optionB, optionC, optionD];
                    for (let i = 0; i < hiddenArray.length; i++) {
                        hiddenArray[i].removeAttribute("style", "text-decoration: line-through; background-color: grey;");
                        hiddenArray[i].style.visibility = 'visible';
                    };
                    optionA.setAttribute("style", "border-radius: 0%;");
                    winCount.textContent = "";
                    game.textContent = "How many hours [per week] should a bootcamp student usually spend to practice coding outside the class?";
                    optionA.textContent = "0";
                    optionB.textContent = "10";
                    optionC.textContent = "25";
                    optionD.textContent = "80";
                };
                var wrongAnswer = [optionA, optionB, optionD];
                for (let i = 0; i < wrongAnswer.length; i++) {
                    const element = wrongAnswer[i];
                    wrongAnswer[i].onclick = function(){
                    element.setAttribute("style", "text-decoration: line-through; background-color: grey;");
                    notes.textContent = "WRONG! You do not have much time left!";
                    wrongChoiceMajor();
                    warning.textContent = "A wrong answer deducts more time than before in this round by the way! 😈";
                    };
                };

                optionC.addEventListener("click", function(){
                var visibleArray = [optionA, optionB];
                    for (let i = 0; i < hiddenArray.length; i++) {
                        visibleArray[i].removeAttribute("style", "text-decoration: line-through; background-color: grey;");
                    };
                });

                optionC.onclick = function() {
                    img[0].classList.remove("winImage");
                    optionC.setAttribute("style", "border-radius: 50%;");
                    notes.textContent = "";
                    var sumPrev4 = [localStorage.getItem("score4"), countDown];
                    var scoreFive = sumPrev4.reduce(getSum, 0);
                    score.textContent = "This is the end of the quiz!";
                    clearInterval(timerMajor);
                    var finalScore = scoreFive * countDown;
                    localStorage.setItem("score5", finalScore);
                    rank.textContent = "Your accumulated score is " + scoreFive + " , and you still have " + countDown + " seconds left.";
                    game.textContent = "Your final score is " + finalScore + "!";
                    rank.setAttribute("style", "text-decoration: none; background-color: black; color: white")
                    var hiddenArray = [optionC, optionD, start, timer];
                    for (let i = 0; i < hiddenArray.length; i++) {
                        hiddenArray[i].style.visibility = 'hidden';
                    };
                    optionA.textContent = "Log Your Score!";
                    optionB.textContent = "Play Again!";
                    optionB.onclick = function(){
                        location.reload();
                    };
                    optionA.onclick = function() {
                        var person = (prompt("Please enter your name"));
                        if (confirm("Thank you for playing!")){
                            location.reload();
                        };
                        localStorage.setItem("person", person.valueOf());
                    }
                }
            }
        }
    }
}
