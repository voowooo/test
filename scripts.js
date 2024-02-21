function checkPassword() {
    var password = document.getElementById("passwordBox");
    var login = document.getElementById("loginBox");
    var loginText = login.value;
    var passwordText = password.value;
    if(passwordText == "1221" & loginText == "jek_a") {
        return true;
    }
    alert("Access denied! Incorrect password or login!");
    return false;
}

// var можно поменять, const нельзя

// || - или; && - и;

var NoSize = 20;
var YesSize = 20;
var width = 140;
var height = 47;
var divHeight = 370;
var YesPos1 = 0;
var NoPosUpd = 0;

function OnMouseOverNo(el) {
    const elRect = el.getBoundingClientRect();
    const maxX = window.innerWidth - elRect.width;
    const maxY = window.innerHeight - elRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    el.style.left = randomX + "px";
    el.style.top = randomY + "px";
    YesSizeButton();
    var YesPos = document.getElementById("YesButton");
    NoPosUpd++;
    if(NoPosUpd <= 1) {
        YesPos.style.left = 800 + "px";
        YesPos1 = 800;
    } 
    console.log(YesPos);
    

}

function YesSizeButton() {
    if (YesSize <= 35)   {
        var el = document.getElementById("YesButton"); 
        YesSize = YesSize + 5;  
        width = width + 30;
        height = height + 10;
        YesPos1 = YesPos1 - 15;
        el.style.fontSize = YesSize + "px";
        el.style.width = width + "px";
        el.style.height = height + "px";
        el.style.left = YesPos1 + "px"; 
    }
}

function yesAns() {
    var el = document.getElementById("gif");
    el.src = "Que2.jpg";
    var el = document.getElementById("YesButton");
    el.style.visibility = "hidden";
    var el = document.getElementById("NoButton");
    el.style.visibility = "hidden";
    var el = document.getElementById("text");
    el.innerHTML = ")))))))))";
}