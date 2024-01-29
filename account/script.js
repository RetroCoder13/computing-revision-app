async function changeEmail(){
    const { data, error } = await supabaseClient.auth.updateUser({
        email: document.getElementById('email').value
    })
    location.href = "../../"
}

async function changePassword(){
    const { data, error } = await supabaseClient.auth.updateUser({
        password: document.getElementById('password').value
    })
    location.href = "../../"
}