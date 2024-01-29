async function loadEmoji(){
    var { data, error } = await supabaseClient
        .from('users')
        .select('emoji')
        .eq('id',JSON.parse(localStorage.getItem("sb-hxfnilmbkorrzhhnohzp-auth-token"))["user"]["id"])
    if(data[i]['emoji'] != "" && data[i]['emoji'] != null){
        document.getElementById('accountIcon').src = "https://openmoji.org/data/color/svg/" + data[0]['emoji'] + ".svg"
        document.getElementById("accountIcon").style.filter = "invert(0)"
        document.getElementById('emojiCode').placeholder = "Emoji Code: " + data[0]['emoji']
    }
}

async function changeEmoji(){
    username = document.getElementById('username').innerHTML
    emojiCode = document.getElementById('emojiCode').value
    var { data, error } = await supabaseClient
        .from('users')
        .update({emoji:emojiCode})
        .eq('id',JSON.parse(localStorage.getItem("sb-hxfnilmbkorrzhhnohzp-auth-token"))["user"]["id"])
    loadEmoji()
}