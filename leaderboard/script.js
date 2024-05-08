async function load(){
    if(localStorage.getItem("sb-hxfnilmbkorrzhhnohzp-auth-token")){
        supabaseClient
            .channel('any')
            .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'users' }, payload => {
                leaderboard()
            })
            .subscribe()
        leaderboard()
    } else {
        location.href = "../auth/signin"
    }
}

async function leaderboard(){
    var { data, error } = await supabaseClient
        .from('users')
        .select()
        .order('correct', {ascending: false})
        .order('incorrect', {ascending: true})
        .order('username')
        .limit(50)

    document.getElementById('leaderboard').innerHTML = "<tr><th id=\"ranking\"></th><th>Username</th><th>Correct</th><th>Incorrect</th><th>Percentage</th></tr>"

    for(let i=0;i<data.length;i++){
        listElement = document.createElement("tr")
        if(data[i]['emoji'] != "" && data[i]['emoji'] != null){
            listElement.innerHTML = `<td id="position${i}">${i + 1}</td><td><img src="${"https://openmoji.org/data/color/svg/" + data[i]['emoji'] + ".svg"}" height="30" class="leftImg"><span style="color:${data[i]['colour']}">${data[i]['username']}</span><img src="${"https://openmoji.org/data/color/svg/" + data[i]['emoji'] + ".svg"}" height="30" class="rightImg"></td><td>${data[i]['correct']}</td><td>${data[i]['incorrect']}</td><td>${calculatePercentage(data[i]['percentage'])}</td>`
        } else {
            listElement.innerHTML = `<td id="position${i}">${i + 1}</td><td><span  style="color:${data[i]['colour']}">${data[i]['username']}</span></td><td>${data[i]['correct']}</td><td>${data[i]['incorrect']}</td><td>${calculatePercentage(data[i]['percentage'])}</td>`
        }
        document.getElementById('leaderboard').appendChild(listElement)
    }
}

window.onload=function(){
    load()
}

function calculatePercentage(data){
    if(data != null){
        return `${data.split("1").length-1}%`
    }
    return "0%"
}