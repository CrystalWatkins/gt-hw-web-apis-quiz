// var secondsLeft = 75;
// var timeEl = document.querySelector("#timer");
// var startGame = document.getElementById("startGame");
// var startUpPage = document.querySelector("#startUpPage");
// var questionPages = document.querySelector("#questionPages");
// var selections = document.querySelector(".selections");
// var selectionA = document.getElementById("selectionA");
// var selectionB = document.getElementById("selectionB");
// var selectionC = document.getElementById("selectionC");
// var selectionD = document.getElementById("selectionD");
// var endOfQuizPage = document.querySelector("#endQuizPage");
// var scoreEl = document.getElementById("final-score");
// var responseEl = document.getElementById("response");
// var highScores = document.getElementById("highScores");
// var userInitials = document.getElementById("userInitials");
// var highScorePage = document.getElementById("highScoresPage")
// // this is the current index- so we are starting at question 1
// var currentQuestion = 0;
// // when you click start game- this starts the timer. it also accounts for 
// //wrong answers- so if you click a wrong answer, you are clearing the timer to
// //allow for the subtracting of points below in the function later
// function setTimer(wrongAnswer) {
// var timerInterval = setInterval(function () {
//   if (wrongAnswer) clearInterval(timerInterval);
//   secondsLeft--;
//   timeEl.textContent = secondsLeft;
//   if (secondsLeft === 0) {
//     //when the time runs out this statement will be executed
//     clearInterval(timerInterval);
//     hideQuestionPage();
//     showEndOfQuizPage(secondsLeft); 
//     }
// }, 1000);
// }

// startGame.addEventListener("click", function () {
//   //this hides the start page when user clicks start btn
//   hideStartPage();
//   //this show the questions page
//   showQuestionPage();
//   setTimer();
//   //this sets the timer/ countdown to go when the click is executed
//   //below calls the generate question function and pass in the current question index so we
//   //know what question to display for the user. When user clicks start this it defaults to
//   //zero and will be incremented when user selects one of the selections as seen in the 
//   //function below
//   generateQuestion(currentQuestion);
// });
// //hides the start page 
// function hideStartPage() {
//   startUpPage.style.display = "none";
// }
// //displays the question page to user
// function showQuestionPage() {
//   questionPages.style.display = "block";
// }
// //hides question page (when user finishes the quiz)
// function hideQuestionPage() {
//   questionPages.style.display = "none";
// }
//this is being used when the user gets an answer wrong
// function wrongAnswer() {
//   var deductedScore = parseInt(timeEl.textContent - 10);
//   secondsLeft = deductedScore;
//   //this clears the interval, since it was already cleared above
//   setTimer(true);
//   clearQuestion();
//   //so we can generate the next question in the array
//   currentQuestion += 1;
//   //generate next question passing in an incremented index
//   generateQuestion(currentQuestion);
//   //displays on page for user to see
//   responseEl.textContent = "wrong"
// }
//this is being used when the user gets an answer right
// function rightAnswer() {
//   //clear the question so we can generate the next one
//   clearQuestion();
//   //so we can generate the next question in the array
//   currentQuestion += 1;
//   //generate next question passing in an incremented index
//   generateQuestion(currentQuestion);
//   //displays on page for user to see
//   responseEl.textContent = "right"
// }

// function clearQuestion() {
//   //empty question content
//   questionHeader.textContent = "";
//   //empty selections
//   selectionA.innerHTML = "";
//   selectionB.innerHTML = "";
//   selectionC.innerHTML = "";
// 
//show the finish section pass in the score to display it to user
// function showEndOfQuizPage(score) {
//   endOfQuizPage.style.display = "block";
//   scoreEl.textContent = score;
// }
//this is the object that contains questions and selections
//i created my buttons inside the array and added wrong and right 
//answer functions inside the array
// var arrayOfQuestionPages = [
//   {
//     question: "Commonly Used data types DO NOT Include:",
//     selections: [
//       "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>strings</button>",
//       "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>booleans</button>",
//       "<button class='btn btn-sm btn-primary' onclick ='rightAnswer()'>alerts</button>",
//       "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>numbers</button>",
//     ],
//   },
//   {
//     question: "The condition in an if/ else statement is enclosed within ___.",
//     selections: [
//       "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>quotes</button>",
//       "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>curly brackets</button>",
//       "<button class='btn btn-sm btn-primary' onclick ='rightAnswer()'>parenthesis</button>",
//       "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>square brackets</button>",
//     ],
//   },
//   {
//     question: "Arrays in JavaScript can be used to store __.",
//     selections: [
//       "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>numbers and strings</button>",
//       "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>other arrays</button>",
//       "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>booleans</button>",
//       "<button class='btn btn-sm btn-primary' onclick ='rightAnswer()'> all of the above</button>",
//     ],
//   },
//   {
//     question:
//       "Sting values must be enclosed within __ when being assigned to variables.",
//     selections: [
//       "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>commas</button>",
//       "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>curly brackets</button>",
//       "<button class='btn btn-sm btn-primary' onclick='rightAnswer()'>quotes</button>",
//       "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>parenthesis</button>",
//     ],
//   },
//   {
//     question:
//       "A very useful tool used during development and debugging for printing content to the debugger is:",
//     selections: [
//       "<button class='btn btn-sm btn-primary' onclick = 'wrongAnswer()'>Javascript</button>",
//       "<button class='btn btn-sm btn-primary' onclick = 'wrongAnswer()'>terminal bash</button>",
//       "<button class='btn btn-sm btn-primary' onclick = 'wrongAnswer()'>for loops</button>",
//       "<button class='btn btn-sm btn-primary' onclick = 'rightAnswer()'>console.log</button>",
//     ],
//   },
// ];
// // this is what is looping through the functions so that you reach all the questions in the array above
// var generateQuestion = function (currentQuestion) {
//   //for loop to reach all questions
//   for (var i = 0; i < arrayOfQuestionPages.length; i++) {
//     var selections = arrayOfQuestionPages[i].selections;
//     if (currentQuestion === i) {
//       //grabs the index in the array that matches current question
//       questionHeader.textContent = 'Question:' + ' ' + arrayOfQuestionPages[i].question;
//       //for loop to reach all of the selections
//       for (var j = 0; j < selections.length; j++) {
//         if (j === 0) {
//           selectionA.innerHTML = selections[0];
//         } else if (j === 1) {
//           selectionB.innerHTML = selections[1];
//         } else if (j === 2) {
//           selectionC.innerHTML = selections[2];
//         } else if (j === 3) {
//           selectionD.innerHTML = selections[3];
//         }
//       }
//       // once you have reached the end of the questions
//     } else if (currentQuestion > 4) {
//       //quiz finished
//       hideQuestionPage();
//         console.log("end of quiz- time is your score");
//         showEndOfQuizPage(timeEl.textContent);
//         timeEl.textContent = "";
//     }
//   }
// };

// function stopTimer() {
//   secondsElapsed= 0;
//   setTimer();
//   renderTime();
// }

renderLastRegistered();
// this is to capture the initials of the high score user
function userInitials (type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}
//creating the dynamic initials
function renderLastRegistered () {
  var initials = localStorage.getItem("initials");
  userInitials.textContent = initials;
}
//this is storing the names of the last users
 submitButton.addEventListener("click", function(event) {
   event.preventDefault();
   var initials = document.getElementById("userInitials").value;
   hideEndOfQuizPage ();
   showHighScoresPage ();

// this allows them to hit the save button and for their initials to be saved 
//to local storage
   if (initials === "") {
     alert("error- Initials cannot be blank");
   } else {
     getElementById("New highScore");
     localStorage.setItem("initials", initials);
     renderLastRegistered ();
   }
 });
 
 function hideEndOfQuizPage() {
  endOfQuizPage.style.display = "none";
}
//displays the question page to user
function showHighScoresPage() {
  highScoresPage.style.display = "block";
}


