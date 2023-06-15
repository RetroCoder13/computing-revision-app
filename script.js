window.onload=function(){
    question = document.getElementById('question');
    answers = document.getElementById('answers');
    scoreCorrect = document.getElementById('scoreCorrect');
    scoreWrong = document.getElementById('scoreWrong');

    correct = 0;
    wrong = 0;

    topic = prompt('Topic?')

    newQuestion()
};

function newQuestion(){
    questionNumber = parseInt(Math.random()*(Object.keys(questions["T"+topic]).length));

    correctAnswerPosition = parseInt(Math.random()*4);
    correctAnswer = false;

    question.innerHTML = questions["T"+topic][questionNumber]["question"]
    answers.innerHTML = "";
    for(let i=0;i<4;i++){
        if(correctAnswerPosition==i){
            answers.innerHTML += `<button onmousemove="gradient(this,event)" onmouseout="removeGradient(this)" onclick=\"answer(this)\" id="correctAnswer">${questions["T"+topic][questionNumber]["correctAnswer"]}</button><br>`
            correctAnswer = true;
        } else {
            if(correctAnswer==true){
                answers.innerHTML += `<button onmousemove="gradient(this,event)" onmouseout="removeGradient(this)" onclick=\"answer(this)\">${questions["T"+topic][questionNumber][`answer${i-1}`]}</button><br>`
            } else {
                answers.innerHTML += `<button onmousemove="gradient(this,event)" onmouseout="removeGradient(this)" onclick=\"answer(this)\">${questions["T"+topic][questionNumber][`answer${i}`]}</button><br>`
            }
        };
    };
}

function answer(element){
    if(element.id=="correctAnswer"){
        // answers.innerHTML = "Correct"
        correct += 1;
        // setTimeout(function(){newQuestion()},1000)
        setTimeout(function(){newQuestion()},0)
    } else {
        // answers.innerHTML = "Incorrect"
        alert("INCORRECT\nThe correct answer is: " + questions["T"+topic][questionNumber]["correctAnswer"])
        wrong += 1;
        setTimeout(function(){newQuestion()},1000)
    };
    scoreCorrect.innerHTML = correct
    scoreWrong.innerHTML = wrong
};