async function changeEmail(){
    const { data, error } = await supabaseClient.auth.updateUser({
        email: document.getElementById('email').value
    })
    document.getElementById('error').innerHTML = "A verification email has been sent to you"
}

async function changePassword(){
    const { data, error } = await supabaseClient.auth.updateUser({
        password: document.getElementById('password').value
    })
    location.href = "../../"
}