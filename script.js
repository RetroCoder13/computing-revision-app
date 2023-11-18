window.onload=function(){
    // var request = new XMLHttpRequest()
    // request.open("GET","https://raw.githubusercontent.com/RetroCoder13/revision/questions/questions.js",false);
    // request.send()
    // eval(request.responseText)

    question = document.getElementById('question');
    answers = document.getElementById('answers');
    scoreCorrect = document.getElementById('scoreCorrect');
    scoreWrong = document.getElementById('scoreWrong');
    numberOfQuestions = document.getElementById('numberOfQuestions')

    correct = 0;
    wrong = 0;
    prevCorrect = 0;
    prevWrong = 0;

    // topic = "CS1"
    // numberOfQuestions.innerHTML = Object.keys(questions).length + " Question(s) for this topic"

    // newQuestion()
};

async function pauseExecutionAsync(timeToWaitMilliseconds) {
    return new Promise(resolve => {
        window.setTimeout(() => {
            resolve(null);
        }, timeToWaitMilliseconds);
    });
}

async function changeTopic(){
    document.getElementById('loading').style.opacity = "1"

    await pauseExecutionAsync(10)

    topic = document.getElementById('topic').value

    var request = new XMLHttpRequest()
    request.open("GET",`https://raw.githubusercontent.com/RetroCoder13/revision/questions/${topic.substring(0,2)}/${topic[2]}/questions.js`,false);
    request.send()
    await eval(request.responseText)

    numberOfQuestions.innerHTML = Object.keys(questions).length + " Question(s) for this topic"

    newQuestion()

    document.getElementById('loading').style.opacity = "0"
}

function newQuestion(){
    questionNumber = parseInt(Math.random()*(Object.keys(questions).length));

    correctAnswerPosition = parseInt(Math.random()*4);
    correctAnswer = false;

    question.innerHTML = questions[questionNumber]["question"]
    answers.innerHTML = "";
    for(let i=0;i<4;i++){
        if(correctAnswerPosition==i){
            answers.innerHTML += `<button onmousemove="gradient(this,event)" onmouseout="removeGradient(this)" onclick=\"answer(this)\">${questions[questionNumber]["correctAnswer"]}</button><br>`
            correctAnswer = true;
        } else {
            if(correctAnswer==true){
                answers.innerHTML += `<button onmousemove="gradient(this,event)" onmouseout="removeGradient(this)" onclick=\"answer(this)\">${questions[questionNumber][`answer${i-1}`]}</button><br>`
            } else {
                answers.innerHTML += `<button onmousemove="gradient(this,event)" onmouseout="removeGradient(this)" onclick=\"answer(this)\">${questions[questionNumber][`answer${i}`]}</button><br>`
            }
        };
    };
}

function answer(element){
    prevCorrect = correct
    prevWrong = wrong
    if(element.innerHTML==questions[questionNumber]["correctAnswer"]){
        // answers.innerHTML = "Correct"
        correct += 1;
        // setTimeout(function(){newQuestion()},1000)
        newQuestion()
    } else {
        // answers.innerHTML = "Incorrect"
        alert("INCORRECT\nThe correct answer is: " + questions[questionNumber]["correctAnswer"])
        wrong += 1;
        setTimeout(function(){newQuestion()},1000)
    };
    update()
    scoreCorrect.innerHTML = "Correct: " + correct
    scoreWrong.innerHTML = "Incorrect: " + wrong
};