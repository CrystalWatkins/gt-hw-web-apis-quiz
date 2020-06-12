
var secondsLeft = 75;
var timeEl = document.getElementById("timer");
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
var responseEl = document.getElementById("response");
var highScores = document.getElementById("highScores");
var userInitials = document.getElementById("userInitials");
var highScorePage = document.getElementById("highScoresPage")
var userScore = document.getElementById("userScore");
var currentQuestion = 0;
var interval;

var timer = 75
 //user must wait until the timer has started for the answers to be clicked
 //otherwise the countdown will start negative and keep going. This is based on 
 //the speed of the browser
startGame.addEventListener("click", function () {
  interval = setInterval(function(){
    if(timer === 0){
        clearInterval()
    }else{
        timer --;
        console.log(timer);
        timeEl.innerHTML = timer;
    }
}, 1000)
  //this hides the start page when user clicks start btn
  hideStartPage();
  //this show the questions page
  showQuestionPage();
  //this sets the timer/ countdown to go when the click is executed
  //below calls the generate question function and pass in the current question index so we
  //know what question to display for the user. When user clicks start this it defaults to
  //zero and will be incremented when user selects one of the selections as seen in the 
  //function below
  generateQuestion(currentQuestion);
});
//hides the start page 
function hideStartPage() {
  startUpPage.style.display = "none";
}
//displays the question page to user
function showQuestionPage() {
  questionPages.style.display = "block";
}
//hides question page (when user finishes the quiz)
function hideQuestionPage() {
  questionPages.style.display = "none";
}
function wrongAnswer() {
  timer = parseInt(timeEl.textContent - 10);
  currentQuestion += 1;
  //generate next question passing in an incremented index
  generateQuestion(currentQuestion);
  //displays on page for user to see
  responseEl.textContent = "wrong"
}
function rightAnswer() {
  //clear the question so we can generate the next one
  clearQuestion();
  //so we can generate the next question in the array
  currentQuestion += 1;
  //generate next question passing in an incremented index
  generateQuestion(currentQuestion);
  //displays on page for user to see
  responseEl.textContent = "right"
}
function clearQuestion() {
  //empty question content
  questionHeader.textContent = "";
  //empty selections
  selectionA.innerHTML = "";
  selectionB.innerHTML = "";
  selectionC.innerHTML = "";
}
function showEndOfQuizPage(score) {
  endOfQuizPage.style.display = "block";
  scoreEl.textContent = score;
}

//this is the object that contains questions and selections
//i created my buttons inside the array and added wrong and right 
//answer functions inside the array
var arrayOfQuestionPages = [
  {
    question: "Commonly Used data types DO NOT Include:",
    selections: [
      "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>strings</button>",
      "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>booleans</button>",
      "<button class='btn btn-sm btn-primary' onclick ='rightAnswer()'>alerts</button>",
      "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>numbers</button>",
    ],
  },
  {
    question: "The condition in an if/ else statement is enclosed within ___.",
    selections: [
      "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>quotes</button>",
      "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>curly brackets</button>",
      "<button class='btn btn-sm btn-primary' onclick ='rightAnswer()'>parenthesis</button>",
      "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>square brackets</button>",
    ],
  },
  {
    question: "Arrays in JavaScript can be used to store __.",
    selections: [
      "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>numbers and strings</button>",
      "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>other arrays</button>",
      "<button class='btn btn-sm btn-primary' onclick ='wrongAnswer()'>booleans</button>",
      "<button class='btn btn-sm btn-primary' onclick ='rightAnswer()'> all of the above</button>",
    ],
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
  },
];
// this is what is looping through the functions so that you reach all the questions in the array above
var generateQuestion = function (currentQuestion) {
  //for loop to reach all questions
  for (var i = 0; i < arrayOfQuestionPages.length; i++) {
    var selections = arrayOfQuestionPages[i].selections;
    if (currentQuestion === i) {
      //grabs the index in the array that matches current question
      questionHeader.textContent = 'Question:' + ' ' + arrayOfQuestionPages[i].question;
      //for loop to reach all of the selections
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
      // once you have reached the end of the questions
    } else if (currentQuestion > 4) {
      hideQuestionPage();
      showEndOfQuizPage(timeEl.textContent);
      timeEl.textContent = "";
      clearInterval(timeEl);
      scoreEl.innerHTML = "your final score is " + timer + ".";
    }
  }
};

renderLastRegistered();
//creating the dynamic initials
function renderLastRegistered () {
  var initials = localStorage.getItem("initials");
  userInitials.textContent = initials;
}
//this is storing the names of the last users
 submitButton.addEventListener("click", function(event) {
   event.preventDefault();
   hideEndOfQuizPage ();
   showHighScoresPage ();

// this allows them to hit the save button and for their initials to be saved 
//to local storage
   if (initials === "") {
     alert("error- Initials cannot be blank");
     return;
   } else {
    var initials = document.getElementById("userInitials").value;
   }
 });
 
 function hideEndOfQuizPage() {
  endOfQuizPage.style.display = "none";
}
//displays the question page to user
function showHighScoresPage() {
  highScoresPage.style.display = "block";
}