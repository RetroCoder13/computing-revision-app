async function loadEmoji(){
    var { data, error } = await supabaseClient
        .from('users')
        .select('emoji')
        .eq('id',JSON.parse(localStorage.getItem("sb-hxfnilmbkorrzhhnohzp-auth-token"))["user"]["id"])
    if(data[0]['emoji'] != "" && data[0]['emoji'] != null){
        document.getElementById('accountIcon').src = "https://openmoji.org/data/color/svg/" + data[0]['emoji'] + ".svg"
        document.getElementById("accountIcon").style.filter = "invert(0)"
        document.getElementById('emojiCode').placeholder = "Emoji Code: " + data[0]['emoji']
    } else {
        document.getElementById('accountIcon').src = "account.svg"
        document.getElementById('emojiCode').placeholder = "Emoji Code"
        loadMode()
    }
}

async function changeEmoji(){
    username = document.getElementById('username').innerHTML
    emojiCode = document.getElementById('emojiCode').value.strip()
    if(!bannedEmojis.includes(emojiCode)){
        var { data, error } = await supabaseClient
            .from('users')
            .update({emoji:emojiCode})
            .eq('id',JSON.parse(localStorage.getItem("sb-hxfnilmbkorrzhhnohzp-auth-token"))["user"]["id"])
        loadEmoji()
    } else {
        document.getElementById('emojiCode').value = ""
        document.getElementById('emojiCode').placeholder = "Blocked emoji"
    }
}

const bannedEmojis = [
    "1F595", // Middle finger
    "1F346", // Eggplant
    "1F351", // Peach
    "1F352", // Cherries
    "1F64B", // Person raising hand
    "1F4A6", // Sweat droplets
]