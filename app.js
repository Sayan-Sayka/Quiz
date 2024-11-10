let questionEl=document.querySelector('.question');
let result=document.querySelector('.result');
let choiceEl=document.querySelector('.choice');
let nxtBtn=document.querySelector('.next');
let quizData=[
    {
        "question": "What is the capital city of Japan?",
        "choice": ["Osaka","Kyoto","Tokyo","Nagoya"],
        "result": "Tokyo",
    },
    {
        "question": "What is the equation of weight?",
        "choice": ["F=mv","F=mg","S=vt","A=F/P"],
        "result": "F=mg",
    },
    {
        "question": "what is the antonym of the word 'militant'?",
        "choice": ["Aggressive","Violent","Vigorous","Tolerant"],
        "result": "Tolerant",
    },
    {
        "question": "Which is the powerhouse of plant cells?",
        "choice": ["Mitochondria","Vacoule","Cytoplasm","Nucleus"],
        "result": "Mitochondria",
    },
    {
        "question": "Which is the same as cosec x?",
        "choice": ["1/cos x","1/tan x","1/sin x","1/sec x"],
        "result": "1/sin x",
    },
];
let now=0;
let score=0;
function display(){
    questionEl.innerText=quizData[now].question;
    nxtBtn.style.display="none";
    quizData[now].choice.forEach(data=>{
        console.log(data);
        let btn=document.createElement('button');
        btn.innerText=data;
        choiceEl.append(btn);
        btn.addEventListener('click', ()=>checkAnswer(data));
    })
}
function checkAnswer(data){
    console.log(data);
    if(data==quizData[now].result){
        result.innerText="Correct";
        score++;
    }else{
        result.innerText="Wrong. Correct answer was "+quizData[now].result;
    }
    nxtBtn.style.display="block";
}
nxtBtn.addEventListener('click',()=>{
    questionEl.innerText="";
    result.innerText="";
    choiceEl.innerText="";
    now++;
    if(now==quizData.length){
        result.innerText="Question ended. Your score was "+score+" out of "+quizData.length;
        nxtBtn.style.display="none";
    }else{
        display();
    }
});

display();