var accountMenu = false
var colourPopUp = false

function account(){
    if(accountMenu){
        accountMenu = false
        document.getElementById('accountInfo').style.animation = "pop-out .5s forwards"
    } else {
        accountMenu = true
        document.getElementById('accountInfo').style.animation = "pop-in .5s forwards"
    }
}

document.addEventListener('mousedown',function(e){
    if(accountMenu == true && (e.clientX > 200 || (e.clientX > 50 && e.clientY < 50))){
        account()
    }
})

async function userColour(){
    colour = document.getElementById('accountColourInput').value
    var { data, error } = await supabaseClient
        .from('users')
        .update({colour:colour})
        .eq('id',JSON.parse(localStorage.getItem("sb-hxfnilmbkorrzhhnohzp-auth-token"))["user"]["id"])
    
    document.getElementById('username').style.color = colour
}

function showColourPopUp(){
    if(correct >= 1000 && !colourPopUp){
        document.getElementById('accountColour').hidden = false
        colourPopUp = true
    } else if(correct < 1000 && !colourPopUp){
        document.getElementById('accountColour').innerHTML = `
        <img src="close.svg" id="accountColourImage" onclick="showColourPopUp()">
        <p>Insufficient correct to change your name colour<br>You must have at least 1000 correct</p>
        `
        document.getElementById('accountColour').hidden = false
        colourPopUp = true
    } else {
        document.getElementById('accountColour').hidden = true
        document.getElementById('accountColour').innerHTML = `
        <img src="close.svg" id="accountColourImage" onclick="showColourPopUp()">
        <input type="color" name="colour" id="accountColourInput" value="#ffffff">
        <button id="accountColourButton" onclick="userColour()">Set Colour</button>
        `
        colourPopUp = false
    }
}