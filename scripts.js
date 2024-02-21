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

// var clicks = 0;

// function OnClickButton(el) {
//     clicks = clicks + 1;
//     console.log(clicks);
//     alert("леон" + clicks);
//     el.innerHTML = "вы нажали кнопку" + clicks;
// }

var NoSize = 20;
var YesSize = 20;

function OnMouseOverNo(el) {
    NoSize = NoSize - 5;
    el.style.fontSize = NoSize + "px";
    console.log(el.style.fontSize); 
    YesSizeButton();
}

function YesSizeButton() {
    if (NoSize >= 0)   {
        var el = document.getElementById("YesButton"); 
        YesSize = YesSize + 5;  
        el.style.fontSize = YesSize + "px";
    }
}

