let quizEl = document.querySelector("#quiz");
// let highScoreEl = document.querySelector("#view-high-scores");
let scoreEl = document.querySelector("score");
let questionEl = document.querySelector("#question");
let answersEl = document.querySelector("#answer-input");
let feedbackEl = document.querySelector("#feedback");

function quizButtonHandler(event) {
  //console.log(event)
  let targetEl = event.target;

  if (targetEl.matches("#start-btn")){
    startQuiz();
  }
  // else if (targetEl.matches(answr-1-btn)){
  //   alert("You have selected answer #1")
  // }
  // else if (targetEl.matches(answr-2-btn)){
  //   alert("You have selected answer #2")
  // }
  // else if (targetEl.matches(answr-3-btn)){
  //   alert("You have selected answer #3")
  // }
  // else if (targetEl.matches(answr-4-btn)){
  //   alert("You have selected answer #4")
  // }
};

function startQuiz () {
  // throw in prompt confirm with rules?
  // empty fields to prepare for quiz
  let title = document.querySelector("#title");
  let startText = document.querySelector("#start-text");
  let startButton = document.querySelector("#start-btn");

  title.parentElement.removeChild(title);
  startText.parentElement.removeChild(startText);
  startButton.parentElement.removeChild(startButton);

  nextQuestion();
}

function nextQuestion () {
  alert("The quiz has started!")
}

quizEl.addEventListener("click", quizButtonHandler);
// highScoreEl.addEventListener("click", viewHighScore);