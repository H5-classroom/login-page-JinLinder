//skapa loginsida i DOM
var beforeLoginPage = `
<p>Please login</p>
<label for="userName">User Name</label>
<input type="text" id="inputU"> <br><br>
<label for="passWord">Password</label>
<input type="text" id="inputP"> <br><br>
<button id="loginBtn">Login</button> <br><br>
<p id="message"></p>`;
//definerar 
let contentBefore = document.getElementById("contentBefore");
contentBefore.innerHTML=beforeLoginPage;

let contentAfter = document.getElementById("contentAfter");
let loginBtn =document.getElementById("loginBtn")

//array för användare och lösenord
let loginData = [
    {userName:"Janne", passWord: "test"},
    {userName:"Kemi", passWord: "test"},
    {userName:"Jin", passWord: "test"},
];

//Klick login button
loginBtn.addEventListener("click",function () { 
    
    let inputU=document.getElementById("inputU");
    let userTextU = inputU.value;
    let inputP=document.getElementById("inputP")
    let userTextP= inputP.value
    console.log(userTextU);
    //loop kollar om användar finns i arrayn
    for (data in loginData){ 
        // om logain lyckas visar welcome/afterlogin sida
        if (userTextU==loginData[data].userName && userTextP==loginData[data].passWord) {
            console.log("It exists")
            localStorage.usernameKey=userTextU;
            localStorage.passWordKey=userTextP;
            let printU=localStorage.getItem("usernameKey");
            let printP=localStorage.getItem("passWordKey");
            
            contentAfter.innerHTML=`<div id="afterLoginPage">
            <P>Welcome ${printU}! You have logged in!</P>
            <button id=logoutBtn>Log out</button>
            </div>`;
            contentBefore.innerHTML="";
            // klick logaout för att loga ut, resan localstorage
            let logoutBtn = document.getElementById("logoutBtn");
            logoutBtn.addEventListener("click", function (){
            localStorage.removeItem("usernameKey");
            localStorage.removeItem("passWordKey");
            contentAfter.innerHTML="";
            contentBefore.innerHTML=beforeLoginPage;
            location.reload();
        })
        }
        //visar felmeddelande om man inte lyckas loga in
        else {
            console.log("Can not find");
            let message = document.getElementById("message");
            message.innerHTML="User name or password is wrong. Please try again.";
        }   
    }
    
});
 