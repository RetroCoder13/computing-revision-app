var accountMenu = false

function account(){
    if(accountMenu){
        accountMenu = false
        document.getElementById('accountInfo').style.animation = "pop-out .5s forwards"
    } else {
        accountMenu = true
        document.getElementById('accountInfo').style.animation = "pop-in .5s forwards"
    }
}