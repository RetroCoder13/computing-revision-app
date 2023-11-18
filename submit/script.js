var username = ""

async function submit(){
    let questionData = username + "\n" + document.getElementById('subject').value + "\n" + document.getElementById('topic').value + "\n\n"
    for(let i=0;i<=questions;i++){
        questionData += ",\n{\n"
        questionData += '    "question": ' + '"' + document.getElementById("question" + i).value + '",\n'
        questionData += '    "correctAnswer": ' + '"' + document.getElementById("correct" + i).value + '",\n'
        questionData += '    "answer0": ' + '"' + document.getElementById("answer0" + i).value + '",\n'
        questionData += '    "answer1": ' + '"' + document.getElementById("answer1" + i).value + '",\n'
        questionData += '    "answer2": ' + '"' + document.getElementById("answer2" + i).value + '",\n'
        questionData += "}"
    }

    const { data, error } = await supabaseClient
        .storage
        .from('questions')
        .upload(`${username + " " + document.getElementById('subject').value + " " + document.getElementById('topic').value + " " + new Date().getDate() + "-" + new Date().getMonth()+1 + "-" + new Date().getFullYear()}.txt`,questionData)
    
    document.getElementById('message').innerHTML = "Your question has been submitted for approval"
}

var questions = 0
function addQuestion(element){
    questions++
    let question = document.createElement("input")
    let correct = document.createElement("input")
    let answer0 = document.createElement("input")
    let answer1 = document.createElement("input")
    let answer2 = document.createElement("input")

    question.id = "question" + questions
    correct.id = "correct" + questions
    answer0.id = "answer0" + questions
    answer1.id = "answer1" + questions
    answer2.id = "answer2" + questions

    question.placeholder = "Question"
    correct.placeholder = "Correct Answer"
    answer0.placeholder = "Other Answer"
    answer1.placeholder = "Other Answer"
    answer2.placeholder = "Other Answer"

    element.before(document.createElement("br"))
    element.before(question)
    element.before(document.createElement("br"))
    element.before(correct)
    element.before(document.createElement("br"))
    element.before(answer0)
    element.before(document.createElement("br"))
    element.before(answer1)
    element.before(document.createElement("br"))
    element.before(answer2)
    element.before(document.createElement("br"))
    element.before(document.createElement("br"))
}

window.onload=async function(){
    if(localStorage.getItem("sb-hxfnilmbkorrzhhnohzp-auth-token")){
        var { data, error } = await supabaseClient
            .from('users')
            .select()
            .eq('id',JSON.parse(localStorage.getItem("sb-hxfnilmbkorrzhhnohzp-auth-token"))["user"]["id"])
        username = data[0]['username']
    } else {
        location.href = "../login"
    }
}