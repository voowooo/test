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
    el.src = "../img/Que2.jpg";
    var el = document.getElementById("YesButton");
    el.style.visibility = "hidden";
    var el = document.getElementById("NoButton");
    el.style.visibility = "hidden";
    var el = document.getElementById("text");
    el.innerHTML = ")))))))))";
}

function getDeviceType() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);
   
    if (isMobile) {
        // window.location.href = 'mobile/index.html';
        return "mobile";
    } else {
        // window.location.href = 'mobile/index.html';
        return "desktop";
    }
}
   
console.log(getDeviceType());













// PASSWORD

var passSumm = 0;
var CorrectPassSumm = 11;

function getPass(butt) {
    var id = butt.id;
    console.log(butt.id + " var id == " + id);
    let str = id;
    let num = parseInt(str);
    console.log(num);
    passSumm = passSumm + num;
    butt.style.background = "rgb(253, 199, 199)";
    console.log(passSumm)
    butt.disabled = true;
}

function clearPass(){
    var el = document.getElementById("1");
    el.style.background = "rgb(75, 75, 75)";
    el.disabled = false;
    var el = document.getElementById("2");
    el.style.background = "rgb(75, 75, 75)";
    el.disabled = false;
    var el = document.getElementById("3");
    el.style.background = "rgb(75, 75, 75)";
    el.disabled = false;
    var el = document.getElementById("4");
    el.style.background = "rgb(75, 75, 75)";
    el.disabled = false;
    var el = document.getElementById("5");
    el.style.background = "rgb(75, 75, 75)";
    el.disabled = false;
    var el = document.getElementById("6");
    el.style.background = "rgb(75, 75, 75)";
    el.disabled = false;
    var el = document.getElementById("7");
    el.style.background = "rgb(75, 75, 75)";
    el.disabled = false;
    var el = document.getElementById("8");
    el.style.background = "rgb(75, 75, 75)";
    el.disabled = false;
    var el = document.getElementById("9");
    el.style.background = "rgb(75, 75, 75)";
    el.disabled = false;
    passSumm = 0;
    var login = document.getElementById("login");
    login.value = "";
}





// LOGIN
function checkPass(){
    var login = document.getElementById("login");
    var loginText = login.value;
    let check = users.find(user => user.name === loginText)
    console.log(check);
    if(check && check.password == passSumm){
        window.location.href = 'GoWalk.html';
    } else if (check && check.password != passSumm){
        alert("wrong password")
    } else {
        alert("something went wrong(")
    }
}

  

// REG
var loginBox = document.getElementById("login");

var users = [
    { name: "admin", password: 1}
];

function signIn(){
    var login = loginBox.value;
    let check = users.find(user => user.name === login)
    console.log(check);
    if(check){
        alert("username is already taken");
    } else {
        var login = loginBox.value;
        var password = passSumm;

        let user = {
            name: login,
            password: password
        };

        users.push(user);
        console.log(users);
        alert("congratulations!!! you are signed in")
    }
}