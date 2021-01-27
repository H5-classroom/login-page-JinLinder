
var welcomePage = `<header>
<h2>Welcome! Please log in!</h2>
<button id="menuBtn">Login</button>
</header>`;
let contentStart = document.getElementById("contentStart")
contentStart.innerHTML=welcomePage

var loginTemplate = `<div id="loginPage"><label for="userName">User Name</label>
<input type="text" id="inputU"> <br><br>
<label for="passWord">Password</label>
<input type="text" id="inputP"> <br>
<button id="loginBtn">Continue</button> </div>`
 
var afterLoginTemplate =`<div id="afterLoginPage"><P>Welcome! You have logged in!</P>
<button>Log out</button></div>`;

let contentBefore = document.getElementById("contentBefore");
let contentAfter = document.getElementById("contentAfter");

let userName ="Janne";
let passWord="test";


let menuBtn = document.getElementById("menuBtn")
menuBtn.addEventListener("click", function () {
    contentBefore.innerHTML=loginTemplate;
    contentStart.innerHTML="";
    let inputU=document.getElementById("inputU");
    let userTextU = inputU.value;
    let inputP=document.getElementById("inputP")
    let userTextP= inputP.value
    let loginBtn =document.getElementById("loginBtn")
        loginBtn.addEventListener("click", function () {
            if (userTextU==userName ) {
                console.log("Hej Janne");
            } else {
                //contentAfter.innerHTML= afterLoginTemplate;
                console.log("hej");
            }
            
        });
});





