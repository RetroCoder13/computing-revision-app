window.onload=function(){
    var request = new XMLHttpRequest()
    request.open("GET","https://raw.githubusercontent.com/RetroCoder13/computing-revision-app/questions/questions.js",false);
    request.send()
    eval(request.responseText)

    question = document.getElementById('question');
    answers = document.getElementById('answers');
    scoreCorrect = document.getElementById('scoreCorrect');
    scoreWrong = document.getElementById('scoreWrong');
    numberOfQuestions = document.getElementById('numberOfQuestions')

    correct = 0;
    wrong = 0;
    prevCorrect = 0;
    prevWrong = 0;

    topic = "CS1"
    numberOfQuestions.innerHTML = Object.keys(questions[topic]).length + " Question(s) for this topic"

    newQuestion()
};

function changeTopic(){
    topic = document.getElementById('topic').value
    numberOfQuestions.innerHTML = Object.keys(questions[topic]).length + " Question(s) for this topic"

    newQuestion()
}

function newQuestion(){
    questionNumber = parseInt(Math.random()*(Object.keys(questions[topic]).length));

    correctAnswerPosition = parseInt(Math.random()*4);
    correctAnswer = false;

    question.innerHTML = questions[topic][questionNumber]["question"]
    answers.innerHTML = "";
    for(let i=0;i<4;i++){
        if(correctAnswerPosition==i){
            answers.innerHTML += `<button onmousemove="gradient(this,event)" onmouseout="removeGradient(this)" onclick=\"answer(this)\">${questions[topic][questionNumber]["correctAnswer"]}</button><br>`
            correctAnswer = true;
        } else {
            if(correctAnswer==true){
                answers.innerHTML += `<button onmousemove="gradient(this,event)" onmouseout="removeGradient(this)" onclick=\"answer(this)\">${questions[topic][questionNumber][`answer${i-1}`]}</button><br>`
            } else {
                answers.innerHTML += `<button onmousemove="gradient(this,event)" onmouseout="removeGradient(this)" onclick=\"answer(this)\">${questions[topic][questionNumber][`answer${i}`]}</button><br>`
            }
        };
    };
}

function answer(element){
    prevCorrect = correct
    prevWrong = wrong
    if(element.innerHTML==questions[topic][questionNumber]["correctAnswer"]){
        // answers.innerHTML = "Correct"
        correct += 1;
        // setTimeout(function(){newQuestion()},1000)
        newQuestion()
    } else {
        // answers.innerHTML = "Incorrect"
        alert("INCORRECT\nThe correct answer is: " + questions[topic][questionNumber]["correctAnswer"])
        wrong += 1;
        setTimeout(function(){newQuestion()},1000)
    };
    update()
    scoreCorrect.innerHTML = "Correct: " + correct
    scoreWrong.innerHTML = "Incorrect: " + wrong
};