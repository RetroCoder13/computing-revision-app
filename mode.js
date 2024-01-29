darkMode = localStorage["revision-darkMode"] == "true"

if(darkMode == undefined){
    darkMode = false
    localStorage["revision-darkMode"] = darkMode
}

function loadMode(){
    if(darkMode){
        document.documentElement.style.setProperty("--mode-bg","#111111")
        document.documentElement.style.setProperty("--mode-text","white")
        document.getElementById("darkMode").src = "https://retrocoder13.github.io/revision/sun.svg"
        document.getElementById("darkMode").style.filter = "invert(1)"
        document.getElementById("loading").style.filter = "invert(1)"
        if(document.getElementById("accountIcon").src.includes("account.svg")){
            document.getElementById("accountIcon").style.filter = "invert(1)"
        }
    } else {
        document.documentElement.style.setProperty("--mode-bg","#FFFFFF")
        document.documentElement.style.setProperty("--mode-text","black")
        document.getElementById("darkMode").src = "https://retrocoder13.github.io/revision/moon.svg"
        document.getElementById("darkMode").style.filter = "invert(0)"
        document.getElementById("loading").style.filter = "invert(0)"
        if(document.getElementById("accountIcon").src.includes("account.svg")){
            document.getElementById("accountIcon").style.filter = "invert(0)"
        }
    }
}

function changeMode(){
    if(darkMode){
        darkMode = false
        document.documentElement.style.setProperty("--mode-bg","#FFFFFF")
        document.documentElement.style.setProperty("--mode-text","black")
        document.getElementById("darkMode").src = "https://retrocoder13.github.io/revision/moon.svg"
        document.getElementById("darkMode").style.filter = "invert(0)"
        document.getElementById("loading").style.filter = "invert(0)"
        if(document.getElementById("accountIcon").src.includes("account.svg")){
            document.getElementById("accountIcon").style.filter = "invert(0)"
        }
    } else {
        darkMode = true
        document.documentElement.style.setProperty("--mode-bg","#111111")
        document.documentElement.style.setProperty("--mode-text","white")
        document.getElementById("darkMode").src = "https://retrocoder13.github.io/revision/sun.svg"
        document.getElementById("darkMode").style.filter = "invert(1)"
        document.getElementById("loading").style.filter = "invert(1)"
        if(document.getElementById("accountIcon").src.includes("account.svg")){
            document.getElementById("accountIcon").style.filter = "invert(1)"
        }
    }
    localStorage["revision-darkMode"] = darkMode
}