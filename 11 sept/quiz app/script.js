const quizData=[
  {
    question:"What is the most used programing language in 2022?",
    a:"Java",
    b:"C",
    c:"Python",
    d:"Javascript",
    correct:"d",
  },
  {
    
  },
  {
    
  },
  {
    
  },
];

const quizData=[
{
  question:"What is the most used programming language in 2022?",
  a:"Java",
  b:"C",
  c:"Python",
  d:"Java Script",
  correct:"d",
},
{
  question:"Which city is known as Pink City?",
  a:"Udaipur",
  b:"Jaipur",
  c:"Jodhpur",
  d:"Jaisalmer",
  correct:"b",
},
{
  question:"How many days do we have in a week?",
  a:"Seven",
  b:"Six",
  c:"Five",
  d:"Four",
  correct:"a",
},
{
  question:"Which animal is known as the Ship of the Desert?",
  a:"Lion",
  b:"Rabbit",
  c:"Camel",
  d:"Horse",
  correct:"c",
},
];

const quiz=document.getElementById('quiz');
const answerElements=document.querySelectorAll('.answer');
const questionElements=document.getElementById('question');
const a_text=document.getElementById('a_text');
const b_text=document.getElementById('b_text');
const c_text=document.getElementById('c_text');
const d_text=document.getElementById('d_text');
const submitBtn=document.getElementById('submit');

let score=0;
let currentQuiz=0;

loadQuiz();
function loadQuiz()
{
  deSelectAnswers();
  const currentQuizData=quizData[currentQuiz];
  questionElements.innerText=currentQuizData.question;
  a_text.innerText=currentQuizData.a;
  b_text.innerText=currentQuizData.b;
  c_text.innerText=currentQuizData.c;
  d_text.innerText=currentQuizData.d;
}

function getSelected()
{
  let answer=undefined;
  answerElements.forEach((answerEl)=>{
    if(answerEl.checked){
      answer=answerEl.id;
    }
  });
  return answer;
}

function deSelectAnswers()
{
  answerElements.forEach((answerEl)=>{
    answerEl.checked=false;
  });
}

submitBtn.addEventListener("click",()=>{
  const answer=getSelected();
  if(answer && answer===quizData[currentQuiz].correct){
    score++;
  }
  currentQuiz++;
  if(currentQuiz<quizData.length){
    loadQuiz();
  }
  else{
    quiz.innerHTML=`<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>`
    
  }
})
