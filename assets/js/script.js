let quizEl = document.querySelector("#quiz");
// let highScoreEl = document.querySelector("#view-high-scores");
let scoreEl = document.querySelector("score");
let questionEl = document.querySelector("#question");
let answersEl = document.querySelector("#answer-input");
let feedbackEl = document.querySelector("#feedback");

// Questions
let questionData = {
  "questions":[
    {
      "question": "Commonly used data types do NOT include:",
      "answers": [
        "strings", "booleans", "alerts", "numbers"
      ]
    },
    {
      "question": "The condition in an if/else statement is enclosed with __________.",
      "answers": [
        "quotes", "curly brackets", "parenthesis", "square brackets"
      ]
    }
  ]
}

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
  // "main > div > h2"
  let startTitle = document.querySelector("#start-title");
  let startText = document.querySelector("#start-text");
  let startButton = document.querySelector("#start-btn");

  startTitle.parentElement.removeChild(startTitle);
  startText.parentElement.removeChild(startText);
  startButton.parentElement.removeChild(startButton);

  alert("The quiz has started!")

  nextQuestion();
}

function nextQuestion () {
  let thisQuestion = questionData.questions[0];
  let askedQuestion = document.createElement("h2");
  // setAttribute("id", "question-1") potentially
  askedQuestion.className = "question-0";
  askedQuestion.textContent = thisQuestion.question;

  questionEl.appendChild(askedQuestion);

  // need to iterate this I think
  for (let i = 0; i <thisQuestion.answers.length; i++) {
    //console.log(thisQuestion.answers[i])
    let answerButton = document.createElement("button")
    answerButton.className = "btn"
    answerButton.textContent = [i+1] + "." + " " + thisQuestion.answers[i];
    answerButton.setAttribute("id", [i])

    answersEl.appendChild(answerButton)
  }
  //console.log(thisQuestion.question)
}

quizEl.addEventListener("click", quizButtonHandler);
// highScoreEl.addEventListener("click", viewHighScore);