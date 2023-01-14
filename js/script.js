const myBtn = document.querySelector(".startBtn button");
const rulesBox = document.querySelector(".rulesBox");
const exitBack = document.getElementById("ext");
const Continue = document.querySelector("#continue");
const qna = document.querySelector(".question");
const nextQna = document.querySelector(".nextBtn");
const timeCount = document.querySelector(".timeCount .second");
const timeLine = document.querySelector(".questionHeader .timeLines");
const timeOff = document.querySelector(".QuestionsHeader .timeLeft");
const winner = document.querySelector(".resultBox");
const quitQuiz = document.querySelector(".resultBtn .quit");

// button Worker=============================================================
myBtn.onclick = () => {
  rulesBox.classList.add("blockRule");
};
exitBack.onclick = () => {
  rulesBox.classList.remove("blockRule");
};
Continue.onclick = () => {
  qna.classList.add("qnaBlock");
  showQna(0);
  startTimer(15);
  startTimeLine(0);
};

// quit Button====================================================================

quitQuiz.onclick = () => {
  window.location.reload();
};

