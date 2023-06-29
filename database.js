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

        xhttp = new XMLHttpRequest()
        xhttp.open("GET","http://worldtimeapi.org/api/timezone/Europe/London",false)
        await xhttp.send()
        await xhttp.OPENED
        currentDate = JSON.parse(xhttp.response)['datetime'].slice(0,10)

        var { dataTime, error } = await supabaseClient
            .from('fln_time')
            .select()
        
        if(dataTime[0]['time'] != currentDate){
            var { dataFLN, error } = await supabaseClient
                .from('users')
                .select()
                .eq('username','Faulkner')
            
            var { data, error } = await supabaseClient
                .from('users')
                .update({correct:parseInt(dataFLN[0]['correct']) + 500, incorrect:parseInt(dataFLN[0]['incorrect'])})
                .eq('username','Faulkner')
            
            var { data, error } = await supabaseClient
                .from('fln_time')
                .update({time:currentDate})
                .eq('username','Faulkner')
        }
        
    } else {
        location.href = "./login"
    }
}

async function update(){
    username = document.getElementById('username').innerHTML
    var { data, error } = await supabaseClient
        .from('users')
        .update({correct:correct, incorrect:wrong})
        .eq('username',username)
}

async function signOut(){
    var { error } = await supabaseClient.auth.signOut()
    location.reload()
}

load()