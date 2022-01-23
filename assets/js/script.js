let quizEl = document.querySelector("#quiz");
let timeLeft = 90;
let questionNumber = 0;
let gameOver = false;
let playerScore = 0;
let highScores = [];

// Questions
let questionData = [
  {
    "question": "Commonly used data types do NOT include:",
    "answers": [
      "strings", "booleans", "alerts", "numbers"
    ],
    "correctAnswer": "alerts",
  },
  {
    "question": "The condition in an if/else statement is enclosed with:",
    "answers": [
      "quotes", "curly brackets", "parenthesis", "square brackets"
    ],
    "correctAnswer": "parenthesis",
  },
  {
    "question": "Arrays in JavaScript can be used to store:",
    "answers": [
      "numbers and strings", "other arrays", "booleans", "all of the above"
    ],
    "correctAnswer": "all of the above",
  },
  {
    "question": "String values must be enclosed within __________ when being assigned to variables.",
    "answers": [
      "commas", "curly brackets", "quotes", "parenthesis"
    ],
    "correctAnswer": "quotes",
  },
  {
    "question": "A very useful tool used during development and debugging for printing content to the debugger is:",
    "answers": [
      "JavaScript", "terminal/bash", "for loops", "console.log"
    ],
    "correctAnswer": "console.log",
  }
]

// user input section
function quizButtonHandler(event) {
  event.preventDefault();
  //console.log(event)
  let targetEl = event.target;
  let feedbackEl = document.createElement("div");
  feedbackEl.setAttribute("id", "feedback");

  if (targetEl.matches("#start-btn")){
    startQuiz();
  }
  else if (targetEl.matches("#answer-btn")){
    let quizFeedback = document.querySelector("main > div[id ='feedback']");
    if (quizFeedback) {
      quizFeedback.remove();
    };
    if (targetEl.textContent.substring(3) === questionData[questionNumber - 1].correctAnswer){
      feedbackEl.innerHTML = "<h3>You answered " + targetEl.textContent.substring(3) + ", which is correct!</h3>";
    }
    else {
      feedbackEl.innerHTML = "<h3>You answered " + targetEl.textContent.substring(3) + ", which is incorrect.</h3>";
      timeLeft -= 10;
    }
        
    quizEl.appendChild(feedbackEl)
    completionCheck();
  }
  else if (targetEl.matches("#score-submit")){
      // check for null inputs
      let playerInitials = document.querySelector("input[class='text-input']").value;
    if (!playerInitials) {
      alert("You need to fill in your initials");
      return false;
    };
    
    let highScoreObj = {
      name: playerInitials,
      type: playerScore
    };
    highScores.push(highScoreObj);
    saveHighScores();
  }
};

// start of the quiz game
function startQuiz () {

  alert("The quiz has started!")
  timerScore();
  nextQuestion();

  let quizFeedback = document.querySelector("main > div[id ='feedback']");
  if (quizFeedback) {
    quizFeedback.remove();
  }

}

function timerScore () {
  let timer = setInterval(function(){
    document.getElementById("score").innerHTML = timeLeft;
    if(timeLeft <= 0 || gameOver){
      clearInterval(timer);
      score();
    };
    timeLeft -= 1;
  }, 1000);
};

// clearing fields
function clearPage () {
  // empty fields
  let quizTitle = document.querySelector("main > div[id ='question']");
  let quizText = document.querySelector("main > div[id ='answer-input']");
  let quizFeedback = document.querySelector("main > div[id ='feedback']");

  if (quizTitle) {
    quizTitle.remove();
  }
  if (quizText) {
    quizText.remove();
  }
  if (quizFeedback) {
    setTimeout(function(){
    quizFeedback.remove();}, 2000);
  }
}

function nextQuestion () {
  clearPage();

  //establish question
  let thisQuestion = questionData[questionNumber];

  // set up question title
  let questionEl = document.createElement("div");
  questionEl.setAttribute("id", "question");
  questionEl.innerHTML = "<h2>" + thisQuestion.question + "</h2>"

  //quizEl.appendChild(questionEl);

  // set up answer choices
  let answersEl = document.createElement("div");
  answersEl.setAttribute("id", "answer-input")
  
  for (let i = 0; i <thisQuestion.answers.length; i++) {
    //console.log(thisQuestion.answers[i])
    let answerButton = document.createElement("button")
    answerButton.className = "btn"
    answerButton.textContent = [i+1] + "." + " " + thisQuestion.answers[i];
    answerButton.setAttribute("id", "answer-btn")

    answersEl.appendChild(answerButton)
  }

  quizEl.prepend(answersEl);
  quizEl.prepend(questionEl);
  questionNumber++;
  //console.log(thisQuestion.question)
}

function completionCheck() {

  if (questionNumber === questionData.length){
    gameOver = true;
  }
  else {
    nextQuestion();
  }
}

function score (){
  clearPage();
  endScreen();
}

function endScreen (){
  playerScore = timeLeft
  let endGameEl = document.createElement("div");
  endGameEl.setAttribute("id", "question");
  endGameEl.innerHTML = "<h2>All Done!</h2>";

  let finalScoreEl = document.createElement("div");
  finalScoreEl.setAttribute("id", "answer-input");
  finalScoreEl.innerHTML = "<h3>Final Score " + playerScore + "</h3>";

  let submitInitials = document.createElement("div");
  submitInitials.setAttribute("id", "feedback");
  submitInitials.innerHTML = "<form><input type='text' class='text-input' placeholder='Enter Initials' /><button class='btn' id='score-submit' type='submit'>Submit</button></form>";

  quizEl.appendChild(endGameEl);
  quizEl.appendChild(finalScoreEl);
  quizEl.appendChild(submitInitials)
}

function saveHighScores(){
  localStorage.setItem("highscores", JSON.stringify(highScores))
}

function loadScores(){
  debugger;
  let savedScores = localStorage.getItem("highscores");

  if (!savedScores) {
    return false;
  }

  savedScores = JSON.parse(savedScores);
  highScores.push(savedScores)
}

quizEl.addEventListener("click", quizButtonHandler);
// highScoreEl.addEventListener("click", viewHighScore);
loadScores();