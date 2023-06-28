async function load(){
    if(localStorage.getItem("sb-hxfnilmbkorrzhhnohzp-auth-token")){
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
    username = data[0]['username']

    document.getElementById('leaderboard').innerHTML = "<tr><th>Username</th><th>Correct</th><th>Incorrect</th></tr>"

    for(let i=0;i<data.length;i++){
        listElement = document.createElement("tr")
        listElement.innerHTML = `<td>${data[i]['username']}</td><td>${data[i]['correct']}</td><td>${data[i]['incorrect']}</td>`
        document.getElementById('leaderboard').appendChild(listElement)
    }


    var { data, error } = await supabaseClient
        .from('users')
        .select()
        .order('incorrect', {ascending: false})
        .order('correct', {ascending: true})
        .order('username')
    username = data[0]['username']

    document.getElementById('leaderboardIncorrect').innerHTML = "<tr><th>Username</th><th>Correct</th><th>Incorrect</th></tr>"

    for(let i=0;i<data.length;i++){
        listElement = document.createElement("tr")
        listElement.innerHTML = `<td>${data[i]['username']}</td><td>${data[i]['correct']}</td><td>${data[i]['incorrect']}</td>`
        document.getElementById('leaderboardIncorrect').appendChild(listElement)
    }
}

load()