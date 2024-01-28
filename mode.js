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
    } else {
        document.documentElement.style.setProperty("--mode-bg","#FFFFFF")
        document.documentElement.style.setProperty("--mode-text","black")
        document.getElementById("darkMode").src = "https://retrocoder13.github.io/revision/moon.svg"
    }
}

function changeMode(){
    if(darkMode){
        darkMode = false
        document.documentElement.style.setProperty("--mode-bg","#FFFFFF")
        document.documentElement.style.setProperty("--mode-text","black")
        document.getElementById("darkMode").src = "https://retrocoder13.github.io/revision/moon.svg"
    } else {
        darkMode = true
        document.documentElement.style.setProperty("--mode-bg","#111111")
        document.documentElement.style.setProperty("--mode-text","white")
        document.getElementById("darkMode").src = "https://retrocoder13.github.io/revision/sun.svg"
    }
    localStorage["revision-darkMode"] = darkMode
}