async function signIn(email,password,username){
    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password,
    })
    console.log(error)
    setAnswers(username)
}

async function newUser(){
    username = document.getElementById('username').value
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    const { emailData, emailError } = await supabaseClient.auth.signUp({
        email: email,
        password: password
    })
    if(emailError){
        // document.getElementById('complete').innerHTML = "Incorrect username or password"
    } else {
        signIn(email,password,username)
    }
}

async function setAnswers(username){
    const { data, error } = await supabaseClient
        .from('users')
        .insert({id:JSON.parse(localStorage.getItem("sb-hxfnilmbkorrzhhnohzp-auth-token"))["user"]["id"], username:username, correct:0, incorrect:0})
    // if(error){
    //     document.getElementById('complete').innerHTML = "User already exists<br><a href='../signin/index.html'>Sign In</a>"
    // } else {
    location.href="../"
    // }
}