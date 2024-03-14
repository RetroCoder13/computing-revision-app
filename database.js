async function load(){
    if(localStorage.getItem("sb-hxfnilmbkorrzhhnohzp-auth-token")){
        var { data, error } = await supabaseClient
            .from('users')
            .select()
            .eq('id',JSON.parse(localStorage.getItem("sb-hxfnilmbkorrzhhnohzp-auth-token"))["user"]["id"])
        document.getElementById('username').innerHTML = data[0]['username']
        if(data[0]['colour']){
            document.getElementById('username').style.color = data[0]['colour']
        }
        document.getElementById('scoreCorrect').innerHTML = "Correct: " + data[0]['correct']
        document.getElementById('scoreWrong').innerHTML = "Incorrect: " + data[0]['incorrect']
        document.getElementById('accountEmail').innerHTML = JSON.parse(localStorage.getItem("sb-hxfnilmbkorrzhhnohzp-auth-token"))["user"]["email"]
        document.getElementById('accountUsername').innerHTML = data[0]['username']
        correct = data[0]['correct']
        wrong = data[0]['incorrect']
        if(correct >= 1000){
            
        }
        prevWrong = wrong
        prevCorrect = correct
        loadEmoji()
        document.body.hidden = false
    } else {
        location.href = "./auth/signin/"
    }
}

async function update(){
    var { data, error } = await supabaseClient
        .from('users')
        .update({correct:correct, incorrect:wrong})
        .eq('id',JSON.parse(localStorage.getItem("sb-hxfnilmbkorrzhhnohzp-auth-token"))["user"]["id"])
    
    if(username == "Cassian" && prevWrong < wrong){
        var { data, error } = await supabaseClient
            .from('users')
            .select()
            .eq('username','Faulkner')
        
        var { data, error } = await supabaseClient
            .from('users')
            .update({correct:parseInt(data[0]['correct']) + 2, incorrect:parseInt(data[0]['incorrect'])})
            .eq('username','Faulkner')
        }
    
    if(username == "Jamie" && prevWrong < wrong){
        correct -= 1
        var { data, error } = await supabaseClient
            .from('users')
            .update({correct:correct})
            .eq('id',JSON.parse(localStorage.getItem("sb-hxfnilmbkorrzhhnohzp-auth-token"))["user"]["id"])
    }

    if(username == "Jamie" && prevCorrect < correct){
        wrong -= 100
        var { data, error } = await supabaseClient
            .from('users')
            .update({incorrect:wrong})
            .eq('id',JSON.parse(localStorage.getItem("sb-hxfnilmbkorrzhhnohzp-auth-token"))["user"]["id"])
    }
}

async function signOut(){
    var { error } = await supabaseClient.auth.signOut()
    location.reload()
}