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

const quiz=document.getElementById("quiz");
const answerEls=document.querySelectorAll(".answer");
const questionEl=document.getElementById("question");
const a_text=document.getElementById("a_text");
const b_text=document.getElementById("b_text");
const c_text=document.getElementById("c_text");
const d_text=document.getElementById("d_text");
const submitBtn=document.getElementById("submit");

let score=0;
let currentQuiz=0;
loadQuiz();
function loadQuiz(){
  deselectAnswers();
  const currentQuizData=quizData[currentQuiz];
  questionEl.innerText=currentQuizData.question;
   a_text.innerText=currentQuizData.a;
   b_text.innerText=currentQuizData.b;
   c_text.innerText=currentQuizData.c;
   d_text.innerText=currentQuizData.d;
}
function getSelected(){
  let answer=undefined;
  answerEls.forEach((answerEl)=>
                   {
    if(answerEl.checked){
      answer=answerEl.id;
    }
  });
  return answer;
}
function deselectAnswer(){
    answerEls.forEach((answerEl)=>
                   {
      answerEl.checked=false;
    }
  });
}
submitBtn.addEventListener("click",()=>{
  const answer=getSelected();
  if(answer)
    {
      if(answer=== quizData[currentQuiz].correct){
        score++;
      }
      currentQuiz++;
      if(currentQuiz<quizData.length)
        {
          loadQuiz();
        }
      else{
        quiz.innerHTML=`<h2>You answered correctly at ${score}/${quizData.length} questions. </h2> <button onclick="location.reload()">Reload</button>`;
      }
    }
})

  
