let quizEl = document.querySelector("#quiz");
// let highScoreEl = document.querySelector("#view-high-scores");
let scoreEl = document.querySelector("score");
// let questionEl = document.querySelector("#question");
// let answersEl = document.querySelector("#answer-input");
// let feedbackEl = document.querySelector("#feedback");
let questionNumber = 0;

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
      "question": "The condition in an if/else statement is enclosed with:",
      "answers": [
        "quotes", "curly brackets", "parenthesis", "square brackets"
      ]
    },
    {
      "question": "Arrays in JavaScript can be used to store:",
      "answers": [
        "numbers and strings", "other arrays", "booleans", "all of the above"
      ]
    },
    {
      "question": "String values must be enclosed within __________ when being assigned to variables.",
      "answers": [
        "commas", "curly brackets", "quotes", "parenthesis"
      ]
    },
    {
      "question": "A very useful tool used during development and debugging for printing content to the debugger is:",
      "answers": [
        "JavaScript", "terminal/bash", "for loops", "console.log"
      ]
    }
  ]
}

// user input section
function quizButtonHandler(event) {
  //console.log(event)
  let targetEl = event.target;

  if (targetEl.matches("#start-btn")){
    startQuiz();
  }
  else if (targetEl.matches("#answer-btn1")){
    let feedbackEl = document.createElement("div");
    feedbackEl.setAttribute("id", "feedback");
    feedbackEl.innerHTML = "<h3>You answered #1</h3>";
    quizEl.appendChild(feedbackEl)
    completionCheck();
  }
  else if (targetEl.matches("#answer-btn2")){
    let feedbackEl = document.createElement("div");
    feedbackEl.setAttribute("id", "feedback");
    feedbackEl.innerHTML = "<h3>You answered #2</h3>";
    quizEl.appendChild(feedbackEl)
    completionCheck();
  }
  else if (targetEl.matches("#answer-btn3")){
    let feedbackEl = document.createElement("div");
    feedbackEl.setAttribute("id", "feedback");
    feedbackEl.innerHTML = "<h3>You answered #3</h3>";
    quizEl.appendChild(feedbackEl)
    completionCheck();
  }
  else if (targetEl.matches("#answer-btn4")){
    let feedbackEl = document.createElement("div");
    feedbackEl.setAttribute("id", "feedback");
    feedbackEl.innerHTML = "<h3>You answered #4</h3>";
    quizEl.appendChild(feedbackEl)
    completionCheck();
  }
};

// start of the quiz game
function startQuiz () {

  alert("The quiz has started!")
  // clearPage();
  nextQuestion();

}

// clearing fields
function clearPage () {
  // empty fields
  let quizTitle = document.querySelector("main > div[id ='question']");
  let quizText = document.querySelector("main > div[id ='answer-input']");
  let quizButton = document.querySelector("main > div[id ='feedback']");

  quizTitle.remove();
  quizText.remove();
  quizButton.remove();
}

function nextQuestion () {
  clearPage();

  //establish question
  let thisQuestion = questionData.questions[questionNumber];

  // set up question title
  let questionEl = document.createElement("div");
  questionEl.setAttribute("id", "question");
  questionEl.innerHTML = "<h2>" + thisQuestion.question + "</h2>"
  // askedQuestion.className = "question-" + questionNumber;
  // askedQuestion.textContent = thisQuestion.question;

  quizEl.appendChild(questionEl);

  let answersEl = document.createElement("div");
  answersEl.setAttribute("id", "answer-input")
  
  for (let i = 0; i <thisQuestion.answers.length; i++) {
    //console.log(thisQuestion.answers[i])
    let answerButton = document.createElement("button")
    answerButton.className = "btn"
    answerButton.textContent = [i+1] + "." + " " + thisQuestion.answers[i];
    answerButton.setAttribute("id", "answer-btn" + [i+1])

    answersEl.appendChild(answerButton)
  }

  quizEl.appendChild(answersEl);
  questionNumber++;
  //console.log(thisQuestion.question)
}

function completionCheck() {

  // if (questionNumber === questionData.length){
  //   score ()
  // }
  // else if ()
  // else {
    nextQuestion();
  //}
}

quizEl.addEventListener("click", quizButtonHandler);
// highScoreEl.addEventListener("click", viewHighScore);