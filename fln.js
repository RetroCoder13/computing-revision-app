async function fln(){
    xhttp = new XMLHttpRequest()
    xhttp.open("GET","http://worldtimeapi.org/api/timezone/Europe/London",false)
    await xhttp.send()
    await xhttp.OPENED
    currentDate = JSON.parse(xhttp.response)['datetime'].slice(0,10)

    var { data, error } = await supabaseClient
        .from('fln_time')
        .select()

    if(data[0]['time'] != currentDate){
        var { data, error } = await supabaseClient
            .from('users')
            .select()
            .eq('username','Faulkner')
        
        var { data, error } = await supabaseClient
            .from('users')
            .update({correct:parseInt(data[0]['correct']) + 500, incorrect:parseInt(data[0]['incorrect'])})
            .eq('username','Faulkner')
        
        var { data, error } = await supabaseClient
            .from('fln_time')
            .update({time:currentDate})
            .eq('id',1)
    }
}

letters = ""

document.addEventListener('keydown',function(e){
    letters += e.key
    if(letters.includes("faulkner")){
        window.open("https://www.youtube.com/watch?v=eFjjO_lhf9c", "_blank").focus()
        letters = ""
    }
})

fln()