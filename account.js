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

document.addEventListener('mousedown',function(e){
    if(accountMenu == true && (e.clientX > 200 || (e.clientX > 50 && e.clientY < 50))){
        account()
    }
})