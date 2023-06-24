async function load(){
    if(localStorage.getItem("sb-hxfnilmbkorrzhhnohzp-auth-token")){
        var { data, error } = await supabaseClient
            .from('users')
            .select()
            .eq('id',JSON.parse(localStorage.getItem("sb-hxfnilmbkorrzhhnohzp-auth-token"))["user"]["id"])
        // console.log(data)
        document.getElementById('username').innerHTML = data[0]['username']
        document.getElementById('scoreCorrect').innerHTML = "Correct: " + data[0]['correct']
        document.getElementById('scoreWrong').innerHTML = "Incorrect: " + data[0]['incorrect']
        correct = data[0]['correct']
        wrong = data[0]['incorrect']
    } else {
        location.href = "./login"
    }
}

async function update(){
    username = document.getElementById('username').innerHTML
    correct = parseInt(document.getElementById('scoreCorrect').innerHTML.replace("Correct: ",""))
    incorrect = parseInt(document.getElementById('scoreWrong').innerHTML.replace("Incorrect: ",""))
    var { data, error } = await supabaseClient
        .from('users')
        .update({correct:correct, incorrect:incorrect})
        .eq('username',username)
}

async function signOut(){
    var { error } = await supabaseClient.auth.signOut()
    location.reload()
}

load()