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
        location.href = "../login"
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

    document.getElementById('leaderboard').innerHTML = "<tr><th id=\"ranking\"></th><th>Username</th><th>Correct</th><th>Incorrect</th></tr>"

    for(let i=0;i<data.length;i++){
        listElement = document.createElement("tr")
        if(data[i]['emoji'] != "" && data[i]['emoji'] != null){
            listElement.innerHTML = `<td>${i + 1}</td><td><img src="${"https://openmoji.org/data/color/svg/" + data[i]['emoji'] + ".svg"}" height="15"> ${data[i]['username']} <img src="${"https://openmoji.org/data/color/svg/" + data[i]['emoji'] + ".svg"}" height="15"></td><td>${data[i]['correct']}</td><td>${data[i]['incorrect']}</td>`
        } else {
            listElement.innerHTML = `<td>${i + 1}</td><td>${data[i]['username']}</td><td>${data[i]['correct']}</td><td>${data[i]['incorrect']}</td>`
        }
        document.getElementById('leaderboard').appendChild(listElement)
    }
}

load()