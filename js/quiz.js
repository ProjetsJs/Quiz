
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

const headers = new Headers();
let data = []
fetch("http://localhost:3000/questions", headers)
.then(response => response.json())
.then(response => {
  console.log(response);
  // data.push(response[0])
  const quizData = response
   console.log(quizData)
  loadQuiz(quizData)
  function loadQuiz(quizData) {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
  }

  function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
  }

  function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
  }
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz(quizData)
       } else {
        showResultBox(score,quizData);
       }
    }
  })
  function showResultBox(scoreCount,question) {
    rulesBox.classList.remove("blockRule");
    qna.classList.remove("qnaBlock");
    winner.classList.add("blockResult");
    const long= question.length
    const scoreText = document.querySelector(".resultBox .scoreText");
    if (scoreCount > 3) {
      let scoreTag = `<span> score maximum félicitation💥 ton score est de<p>${scoreCount}</p> / <p>${long}</p></span>`;
      scoreText.innerHTML = scoreTag;
    } else if (scoreCount >= 1) {
      let scoreTag = `<span> score Moyen👌 ton score est de <p>${scoreCount}</p> /<p>${long}</p></span>`;
      scoreText.innerHTML = scoreTag;
    } else {
      let scoreTag = `<span>Score faible👎 ton score est de<p>${scoreCount}</p> /<p>${long}</p></span>`;
      scoreText.innerHTML = scoreTag;
    }
  }
})
