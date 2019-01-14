

const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
];

let question;

function appendQuestion(question) {
  let questionContainerDiv = document.querySelector(".question-container");
  questionContainerDiv.innerHTML = question.questionText;
}

function askQuestionThen(time) {
  question = questions[0];
  var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(question);
    }, time);
  });
  return promise1;
}

function removeQuestion() {
  return new Promise(function () {
    let questionContainerDiv = document.querySelector(".question-container");
    questionContainerDiv.innerHTML = '';
    toggleTrueAndFalseButtons();
  })
}

function askQuestionThenRemoveQuestion(time) {
  appendQuestion(question);
  return askQuestionThen(time).then(removeQuestion)
}

function trueAndFalseButtons() {
  return btns = document.querySelector('.true-false-list').querySelectorAll('.btn')
}

function toggleTrueAndFalseButtons() {
  trueAndFalseButtons().forEach(function (button) {
    button.classList.toggle("hide");
  })
}

function displayQuestionOnClick() {
  appendQuestion(question);
  trueAndFalseButtons();
  toggleTrueAndFalseButtons();
}
