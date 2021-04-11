var start = document.querySelector(".start");
var next = document.querySelector(".next");
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

start.addEventListener("click", function(event) {
    event.preventDefault();
    game.textContent = "What does HTML stand for?";
    optionA.textContent = "Hypertext Markup Language";
    optionB.textContent = "Hypetext Markup Linguine";
    optionC.textContent = "Hypotext Makeup Language";
    optionD.textContent = "Hyper Text Makeup Language";
    var countDown = 6;
    var timerMajor = setInterval(function (){
        countDown--;
        timer.textContent = countDown + " seconds left till you lose!";
    if (countDown == 0){
        clearInterval(timerMajor);
        runOutOfTime()}
    optionA.addEventListener("click", function(){
        winCount.textContent = "correct! " + countDown + " point(s) are accumulated";
        clearInterval(timerMajor);
        localStorage.setItem("score1", countDown);});


        next.addEventListener("click", function(event) {
            winCount.textContent = "";
            event.preventDefault();
            game.textContent = "What does JSON stand for?";
            optionA.textContent = "Java's Son";
            optionB.textContent = "Javis is On";
            optionC.textContent = "JavaScript Object Notation";
            optionD.textContent = "JavaScript Orientation Notation";
            var countDown2 = 6;
            var timerMajor2 = setInterval(function (){
                countDown2--;
                timer.textContent = countDown2 + " seconds left till you lose!";
            if (countDown2 == 0){
                clearInterval(timerMajor2);
                runOutOfTime()}
            optionC.addEventListener("click", function(){
                clearInterval(timerMajor2);
                var sumPrev = [localStorage.getItem("score1"), countDown2];
                var scoreTwo = sumPrev.reduce(getSum, 0)
                winCount.textContent = "correct! " + scoreTwo + " point(s) are accumulated!";
                localStorage.setItem("score2", scoreTwo);});



                next.addEventListener("click", function(event) {
                    winCount.textContent = "";
                    event.preventDefault();
                    game.textContent = "What does CSS stand for?";
                    optionA.textContent = "Color & Style Sheets";
                    optionB.textContent = "Computer Style Sheets";
                    optionC.textContent = "Chinese Styles Rule";
                    optionD.textContent = "Cascading Style Sheets ";
                    var countDown3 = 6;
                    var timerMajor3 = setInterval(function (){
                        countDown3--;
                        timer.textContent = countDown3 + " seconds left till you lose!";
                    if (countDown == 0){
                        clearInterval(timerMajor3);
                        runOutOfTime()}
                    optionD.addEventListener("click", function(){
                        clearInterval(timerMajor3);
                        var sumPrev2 = [localStorage.getItem("score2"), countDown3];
                        var scoreThree = sumPrev2.reduce(getSum, 0)
                        winCount.textContent = "correct! " + scoreThree + " point(s) are accumulated!";
                        localStorage.setItem("score3", scoreThree);});
                    }, 1000)});

            }, 1000)});


    }, 1000)});


function runOutOfTime() {
    notes.innerHTML = "you ran out of time! press next to continue!";}
