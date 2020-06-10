//View Highscores in top left corner
// Time with timer countdown in top right corner
//Welcome page with start quiz button
//has script that reads: coding quiz challenge as H1 p= Try to answer the following code-related
//questions within the time limit. Keep in mind that incorrect answers will penalize your score/ 
// time by ten seconds with start quiz button at the bottom
// start with 75 seconds
// 01- Commonly Used data types DO NOT Include: 
//1. strings 2. booleans 3. alerts** 4. numbers
// 02-The condition in an if/ else statement is enclosed within ___. 
//1. quotes 2. curly brackets 3.parenthesis 4. square brackets
//03- Arrays in JavaScript can be used to store __.
//1. numbers and strings 2. other arrays 3. booleans** 4. all of the above
//04-Sting values must be enclosed within __ when being assigned to variables.
// 1. commas 2. curly brackets 3. quotes 4. parentheses
//05-A very useful tool used during development and debugging for printing content to the debugger is:
// 1. JavaScript 2. terminal/ bash 3. for loops 4. console.log
//after each click- put correct or wrong at the bottom
//if wrong- subtract 15 seconds from timer/ score
//at end of 5 questions- it will say "all done// your final score is _(time left)" Enter initials
//when submit button is hit for initials- it will show hight scores.
// underneath are two buttons to go back and clear high scores
// console.log("hello world")

// var startTimer = confirm("Would you like to start the timer?");
var secondsLeft= 75;
var timeEl = document.querySelector("#timer");
var startGame = document.querySelector("#startGame");
var startUpPage = document.querySelector("#startUpPage");
var firstQuestionPage = document.querySelector("#firstQuestionPage");
var firstButton = document.querySelector("#firstButton");
var secondQuestionPage = document.querySelector("#secondQuestionPage");
var secondButton = document.querySelector("#secondButton");
var thirdQuestionPage = document.querySelector("#thirdQuestionPage");
var thirdButton = document.querySelector("#thirdButton");
var fourthQuestionPage = document.querySelector("#fourthQuestionPage");
var fourthButton = document.querySelector("#fourthButton");
var fifthQuestionPage = document.querySelector("#fifthQuestionPage");
var fifthButton = document.querySelector("#fifthButton");

function setTime () {
    startGame.addEventListener("click", function setTime() {
    startUpPage.style.display= "none"
    firstQuestionPage.style.display = "block"
    var timerInterval = setInterval(function() {
    secondsLeft-- ;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
});
}

firstButton.addEventListener("click",function() {
    firstQuestionPage.style.display = "none";
    secondQuestionPage.style.display= "block";
});

setTime();




// playButton.addEventListener("click", countdownTimer);