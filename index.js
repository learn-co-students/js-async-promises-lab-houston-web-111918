const questions = [
  {questionText: "Lightning never strikes in the same place twice", answer: false},
  {questionText: "Humans can distinguish between over one trillion different smells", answer: true},
  {questionText: "Goldfish only have a memory of about three seconds", answer: false}
]

let question;

function appendQuestion(question){
  container = document.querySelector('.question-container')
  // console.log(question) question = question[0]
  container.innerHTML = question.questionText
}


function askQuestionThen(time){
  question = questions[0]
  appendQuestion(question)
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve(question)
    }, time)
  })
}

function removeQuestion(){
  // it returns a promise so that the function is "thennable", meaning we can do something after the question
// let container = document.querySelector('.question-container')
container.innerHTML = ''
}

function askQuestionThenRemoveQuestion(time){
appendQuestion(question)
return new Promise(function(resolve){
  setTimeout(function(){
    resolve(question)
  },time)
})
}

function trueAndFalseButtons(){
  // let arr = []
  // let tru = document.createElement('button')
  // tru.innerText = "TRUE"
  // let fal = document.createElement('button')
  // fal.innerHTML = "FALSE"
  return document.querySelector('.true-false-list').querySelectorAll('.btn')
  // let btn = document.querySelector('a')
  // console.log(btn)
  // arr.push(tru, fal)
  
}

function toggleTrueAndFalseButtons(){
  trueAndFalseButtons().forEach(function(btn){
    btn.classList.toggle("hide")
  })
}

function displayQuestionOnClick(){
  // let btn = document.querySelector('a')
  // return btn.addEventListener('click', () => {
  //   toggleTrueAndFalseButtons()
  //   askQuestionThenRemoveQuestion(5000)
  // })
}