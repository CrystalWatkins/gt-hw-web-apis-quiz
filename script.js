
var secondsLeft = 75;
var timeEl = document.querySelector("#timer");
var startGame = document.getElementById("startGame");
var startUpPage = document.querySelector("#startUpPage");
var questionPages = document.querySelector("#questionPages");
var selections = document.querySelector(".selections");
var endOfQuizPage = document.querySelector("#endOfQuizPage")

startGame.addEventListener("click", function () {
  startUpPage.style.display = "none"
  questionPages.style.display = "block"
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
});

var wrongAnswer = function() {
  console.log ("wrong answer")
  };
var rightAnswer = function () {
  console.log("right answer")
  };

var arrayOfQuestionPages = [
  {
    question: "Commonly Used data types DO NOT Include:",
    selections: ["<button onclick = 'wrongAnswer()'>strings</button>", "<button onclick = 'wrongAnswer()'>booleans</button>", "<button onclick = 'rightAnswer()'>alerts</button>", "<button onclick = 'wrongAnswer()'>numbers</button>"],
    answer: "alerts",
  },
  {
    question: "The condition in an if/ else statement is enclosed within ___.",
    selections: ["<button onclick = 'wrongAnswer()'>quotes</button>", "<button onclick = 'wrongAnswer()'>curly brackets</button>", "<button onclick = 'rightAnswer()'>parenthesis</button>", "<button onclick = 'wrongAnswer()'>square brackets</button>"],
    answer: "parenthesis",
  },
  {
    question: "Arrays in JavaScript can be used to store __.",
    selections: ["<button onclick = 'wrongAnswer()'>numbers and strings</button>", "<button onclick = 'wrongAnswer ()'>other arrays</button>", "<button onclick = 'wrongAnswer'>booleans</button>","<button onclick = 'rightAnswer'> all of the above</button>"],
    answer: "all of the above",
  },
  {
    question: "Sting values must be enclosed within __ when being assigned to variables.",
    selections: [ "<button onclick = 'wrongAnswer()'>commas</button>", "<button onclick = 'wrongAnswer()'>curly brackets</button>","<button onclick= 'rightAnswer'>quotes</button>", "<button onclick = 'wrongAnswer'>parenthesis</button>"],
    answer: "quotes",
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    selections: ["<button onclick = 'wrongAnswer()'>Javascript</button>", "<button onclick = 'wrongAnswer()'>terminal bash</button>", "<button onclick = 'wrongAnswer()'>for loops</button>", "<button onclick = 'rightAnswer'()>console.log</button>"],
    answer: "console.log",
  },
]

var currentQuestionIndex = 0;
var question =  arrayOfQuestionPages[0]

function nextQuestionPage() {
  if (currentQuestionIndex > 4 || timer > 0) {
    endOfQuizPage.style.display = "block";
  }
  else {
    for (let i = 0; i < arrayOfQuestionPages.length; i++){
        selections.addEventListener ("click",  function() {
        console.log ("selection is clicked ")
        arrayOfQuestionPages.length ++
      })
    };
    console.log('made it to here!')
    var currentQuestion = arrayOfQuestionPages[currentQuestionIndex];
    questionPages.innerHTML = "";
    var question = document.querySelector("questionPages");
    question.textContent = currentQuestion.selections;
  }
};

nextQuestionPage ();

for(let i = 0; i < arrayOfQuestionPages.length; i++){
  var question = arrayOfQuestionPages[i].question;
  var selections = arrayOfQuestionPages[i].selections;
  var answer = arrayOfQuestionPages[i].answer;
  if (i === 0) {
    console.log(question);
    console.log(selections);
    console.log(answer);
    console.log(questionHeader);
    questionHeader.textContent = `Question: ${question}`;
    for (let j = 0; j < selections.length; j++) {
      if (j === 0) {
          selectionA.innerHTML = selections[0]
      }else if (j === 1) {
          selectionB.innerHTML = selections[1]
      } else if (j === 2) {
          selectionC.innerHTML = selections[2]
      } else if (j === 3) {
          selectionD.innerHTML = selections[3]
      }
      }
    }
}
 


