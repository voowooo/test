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

for(var i = 10; i > 5; i --) {
    console.log(i);
}

// видео 9