
var secondsLeft = 75;
var timeEl = document.querySelector("#timer");
var startGame = document.getElementById("startGame");
var startUpPage = document.querySelector("#startUpPage");
var questionPages = document.querySelector("#questionPages");
var selections = document.querySelector(".selections");
var selectionA = document.getElementById("selectionA");
var selectionB = document.getElementById("selectionB");
var selectionC = document.getElementById("selectionC");
var selectionD = document.getElementById("selectionD");
var endOfQuizPage = document.querySelector("#endQuizPage");
var scoreEl = document.getElementById("final-score");
//current question starts at 1 ( technically 0 since array is 0 indexed)
var currentQuestion = 0;
var scoreArray = [];
// start game and set up timer
startGame.addEventListener("click", function () {
  //hide start page when user clicks start btn
  hideStartPage();
  //show the questions page
  showQuestionPage();
  //set up the counter
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      //when the time runs out this statement will be executed
      clearInterval(timerInterval);
      hideQuestionPage();
      showEndOfQuizPage(secondsLeft); //seconds left === users score which is 0
    }
  }, 1000);
  //call generate question function and pass in the current question index so we know
  //what question to display for the user. When user clicks start this is defaulted to zero
  //and will be incremented when user selects answer
  generateQuestion(currentQuestion);
});
//hide the start page
function hideStartPage() {
  startUpPage.style.display = "none";
}
//display questions page to user
function showQuestionPage() {
  questionPages.style.display = "block";
}
//hide question page (when user finishes the quiz)
function hideQuestionPage() {
  questionPages.style.display = "none";
}
//what we do when user gets answer wrong
function wrongAnswer() {
  var score = parseInt(timeEl.textContent) - 10;
  if (scoreArray.length === 0) {
    console.log("wrong answer if score", score);
    //no scores in the array yet
    scoreArray.push(score);
  } else {
    //scores in the array so subtract 10 from the last score
    //in the array
    var lastScore = scoreArray.pop();
    var newScore = lastScore - 10;
    scoreArray.push(newScore);
    console.log("wrong answer else new score", newScore);
  }
  //clear the question so we can generate the next one
  clearQuestion();
  //so we can generate the next question in the array
  currentQuestion += 1;
  //generate next question passing in an incremented index
  generateQuestion(currentQuestion);
}
//what we do when user gets it right
function rightAnswer() {
  //clear the question so we can generate the next one
  clearQuestion();
  //so we can generate the next question in the array
  currentQuestion += 1;
  //generate next question passing in an incremented index
  generateQuestion(currentQuestion);
}

function clearQuestion() {
  //empty question content
  questionHeader.textContent = "";
  //empty selections
  selectionA.innerHTML = "";
  selectionB.innerHTML = "";
  selectionC.innerHTML = "";
  selectionD.innerHTML = "";
}
//show the finish section pass in the score to display it to user
function showEndOfQuizPage(score) {
  endOfQuizPage.style.display = "block";
  scoreEl.textContent = score;
}

var arrayOfQuestionPages = [
  {
    question: "Commonly Used data types DO NOT Include:",
    selections: [
      "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>strings</button>",
      "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>booleans</button>",
      "<button class='btn btn-sm btn-primary' onclick ='rightAnswer()'>alerts</button>",
      "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>numbers</button>",
    ],
    // answer: "alerts",
  },
  {
    question: "The condition in an if/ else statement is enclosed within ___.",
    selections: [
      "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>quotes</button>",
      "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>curly brackets</button>",
      "<button class='btn btn-sm btn-primary' onclick ='rightAnswer()'>parenthesis</button>",
      "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>square brackets</button>",
    ],
    // answer: "parenthesis",
  },
  {
    question: "Arrays in JavaScript can be used to store __.",
    selections: [
      "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>numbers and strings</button>",
      "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>other arrays</button>",
      "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>booleans</button>",
      "<button class='btn btn-sm btn-primary' onclick ='rightAnswer()'> all of the above</button>",
    ],
    // answer: "all of the above",
  },
  {
    question:
      "Sting values must be enclosed within __ when being assigned to variables.",
    selections: [
      "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>commas</button>",
      "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>curly brackets</button>",
      "<button class='btn btn-sm btn-primary' onclick='rightAnswer()'>quotes</button>",
      "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>parenthesis</button>",
    ],
    // answer: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    selections: [
      "<button class='btn btn-sm btn-primary' onclick = 'wrongAnswer()'>Javascript</button>",
      "<button class='btn btn-sm btn-primary' onclick = 'wrongAnswer()'>terminal bash</button>",
      "<button class='btn btn-sm btn-primary' onclick = 'wrongAnswer()'>for loops</button>",
      "<button class='btn btn-sm btn-primary' onclick = 'rightAnswer()'>console.log</button>",
    ],
    // answer: "console.log",
  },
];

var generateQuestion = function (currentQuestion) {
  for (var i = 0; i < arrayOfQuestionPages.length; i++) {
    var selections = arrayOfQuestionPages[i].selections;
    if (currentQuestion === i) {
      //grabs the index in the array that matches current question
      questionHeader.textContent = 'Question:' + ' ' + arrayOfQuestionPages[i].question;
      for (var j = 0; j < selections.length; j++) {
        if (j === 0) {
          selectionA.innerHTML = selections[0];
        } else if (j === 1) {
          selectionB.innerHTML = selections[1];
        } else if (j === 2) {
          selectionC.innerHTML = selections[2];
        } else if (j === 3) {
          selectionD.innerHTML = selections[3];
        }
      }
    } else if (currentQuestion > 4) {
      //quiz finished
      hideQuestionPage();
      if (scoreArray.length > 0) {
        //this means subtracted scores were pushed into the array
        //in the wrongAnswer() function
        var score = scoreArray.pop(); //get the last score pushed into the array
        //and pass it to this function to display it to the user
        console.log("end of quiz if so subtracted scores score", score);
        showEndOfQuizPage(score);
      } else {
        // no subtracted scores added to the array
        //this means user got all questions correct and their score would be
        //the total number of seconds left
        var perfectScore = timeEl.textContent;
        console.log("end of quiz else perfect score", perfectScore);
        showEndOfQuizPage(perfectScore);
      }
    }
  }
};