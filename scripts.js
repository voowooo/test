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




// document.write("Hello world from JS");
// console.log("Hello world from JS");
// console.error("test error from JS") обязательно фиксить
// console.warn("test warn from JS"); /*необязаельно фиксить (просто уведомление)*/

// var можно поменять, const нельзя

// || - или; && - и;

// 7 урок (не смотрел)