//skapa varibler som ska flyttas till DOM vid olika tillfälle
let content = document.getElementById("content");

let beforeLoginPage =`<p>Please login</p>
<label for="userName">User Name</label>
<input type="text" id="inputU"> <br><br>
<label for="passWord">Password</label>
<input type="text" id="inputP"> <br><br>
<button id="loginBtn">Login</button> 
<button id="regBtn"> Register </button> <br><br>
<p id="message"></p>`;

let afterLoginPage = `<P>Welcome ${localStorage.getItem('usernameKey')}! You have logged in!</P>
<button id=logoutBtn>Log out</button>`;

let regPage =`<label for="userName">Register user Name</label>
<input type="text" id="regU"> <br><br>
<label for="passWord">Register password</label>
<input type="text" id="regP"> <br><br>
<button id="comfirmBtn">comfirm</button> <br>
<p id="regMessage"></P>`

//array för login information, användare och lösenord
let loginData = [
    {userName:"Janne", passWord: "test"},
    {userName:"Kemi", passWord: "test"},
    {userName:"Jin", passWord: "test"},
];

//Kolla först om det finns användare som är inloggad. Om det finns visar afterloginsidan 
if (localStorage.usernameKey!=null) {
    console.log("Någon är inloggad");
    content.innerHTML= afterLoginPage; 
    //loggaut knapp i afterloginsida. klicka och loga ut samt rensa i local storage  
    let logoutBtn = document.getElementById("logoutBtn");
        logoutBtn.addEventListener("click", function (){
        localStorage.removeItem("usernameKey");
        localStorage.removeItem("passWordKey");
        content.innerHTML= beforeLoginPage;
        location.reload(); 
    })
}
    //Om igen som är inloggad visar beforeloginsida
else {
    console.log("Ingen är inloggad");
    content.innerHTML= beforeLoginPage;
    //loggain knapp: loga in samt spara i local stprage 
    let loginBtn =document.getElementById("loginBtn");
    loginBtn.addEventListener("click",function () { 
        let inputU=document.getElementById("inputU");
        let userTextU = inputU.value;
        let inputP=document.getElementById("inputP")
        let userTextP= inputP.value
        console.log("Användarname är : ", userTextU);
     //loop kollar om användar finns i arrayn
        for (data in loginData){ 
            if (userTextU==loginData[data].userName && userTextP==loginData[data].passWord) {
                console.log("Användare finns!")
                localStorage.usernameKey=userTextU;
                let printU=localStorage.getItem("usernameKey");
                let printP=localStorage.getItem("passWordKey"); 
                content.innerHTML=afterLoginPage
                location.reload();             
            }
            else {
                console.log("Användare finns inte");
                let message = document.getElementById("message");
                message.innerHTML="User name or password is wrong. Please try again.";
            }   
        }    
    });
    //register knapp: registrera nya användare
    let regBtn=document.getElementById("regBtn");
    regBtn.addEventListener("click", function () {
        content.innerHTML= regPage;
        let comfirmBtn = document.getElementById("comfirmBtn");
        //comfirm knapp
        comfirmBtn.addEventListener("click", function () {
            let regU=document.getElementById("regU");
            let userRegU = regU.value;
            let regP=document.getElementById("regP")
            let userRegP= regP.value;
            console.log("Ny användare är: ", userRegU);
                if (userRegU !=null && userRegU!= "" && userRegP !=null && userRegP !="") {
                    loginData.push({userName:userRegU, passWord: userRegP});
                    localStorage.setItem(("loginData"), JSON.stringify(loginData));
                    let getLoginData = JSON.parse(localStorage.getItem("loginData"));                
                    console.log("getLoginData: ", getLoginData);
                    console.log("loginData: ",loginData);
                    content.innerHTML=afterLoginPage;
                    //logut knapp i afterloginsida
                    let logoutBtn = document.getElementById("logoutBtn");
                    logoutBtn.addEventListener("click", function (){
                        localStorage.removeItem("loginData");
                        content.innerHTML= beforeLoginPage;
                        location.reload(); 
                    })
                }
                else {
                    console.log("Please fill in username and password.");
                    let regMessage = document.getElementById("regMessage");
                    regMessage.innerHTML="User name or password can not be empty. Please fill in username and password..";
                }    
        })
    })
    
}
