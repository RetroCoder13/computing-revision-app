async function changeEmail(){
    const { data, error } = await supabaseClient.auth.updateUser({
        email: document.getElementById('email').value
    })
    document.getElementById('error').innerHTML = error
}

async function changePassword(){
    const { data, error } = await supabaseClient.auth.updateUser({
        password: document.getElementById('password').value
    })
    document.getElementById('error').innerHTML = error
}