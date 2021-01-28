localStorage.usernameKey;

//skapa loginsida i DOM
let content = document.getElementById("content");


let beforeLoginPage =`<p>Please login</p>
<label for="userName">User Name</label>
<input type="text" id="inputU"> <br><br>
<label for="passWord">Password</label>
<input type="text" id="inputP"> <br><br>
<button id="loginBtn">Login</button> 
<button id="regBtn"> Register </button> <br><br>
<p id="message"></p>`;

let afterLoginPage = `<div id="afterLoginPage">
<P>Welcome ${localStorage.getItem('usernameKey')}! You have logged in!</P>
<button id=logoutBtn>Log out</button>
</div>`;

//array för användare och lösenord
let loginData = [
    {userName:"Janne", passWord: "test"},
    {userName:"Kemi", passWord: "test"},
    {userName:"Jin", passWord: "test"},
];


if (localStorage.usernameKey !=null) {
    console.log("inte lika med null");
    //var beforeLoginPage = 
    //identifera variabler
        content.innerHTML= afterLoginPage;
            // klick logaout för att loga ut, resan localstorage
        let logoutBtn = document.getElementById("logoutBtn");
        logoutBtn.addEventListener("click", function (){
            localStorage.removeItem("usernameKey");
            localStorage.removeItem("passWordKey");
            content.innerHTML= beforeLoginPage;
            location.reload(); 
        })

    }
else {
    console.log("lika med null");
    content.innerHTML= beforeLoginPage;
    let loginBtn =document.getElementById("loginBtn");
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
                //localStorage.passWordKey=userTextP;
                let printU=localStorage.getItem("usernameKey");
                //let printP=localStorage.getItem("passWordKey");
                
                content.innerHTML=`<div id="afterLoginPage">
                <P>Welcome ${printU}! You have logged in!</P>
                <button id=logoutBtn>Log out</button>
                </div>`;
                location.reload();             
            }
            //visar felmeddelande om man inte lyckas loga in
            else {
                console.log("Can not find");
                let message = document.getElementById("message");
                message.innerHTML="User name or password is wrong. Please try again.";
            }   
        }
        
    });
    
}

let regBtn=document.getElementById("regBtn");


//Klick login button

//register button
regBtn.addEventListener("click", function () {
    content.innerHTML=`<label for="userName">Register user Name</label>
    <input type="text" id="regU"> <br><br>
    <label for="passWord">Register password</label>
    <input type="text" id="regP"> <br><br>
    <button id="comfirmBtn">comfirm</button> <br>
    <p id="regMessage"></P>`;
    
    let comfirmBtn = document.getElementById("comfirmBtn");
//comfirm button
    comfirmBtn.addEventListener("click", function () {
    let regU=document.getElementById("regU");
    let userRegU = regU.value;
    let regP=document.getElementById("regP")
    let userRegP= regP.value;
    console.log(userRegU);
        if (userRegU !=null && userRegU!= "" && userRegP !=null && userRegP !="") {
        loginData.push({userName:userRegU, passWord: userRegP});
        localStorage.usernameKey = userRegU;
        content.innerHTML=beforeLoginPage;
        //console.log(loginData);
        }
        else {
            console.log("Please fill in username and password.");
            let regMessage = document.getElementById("regMessage");
            regMessage.innerHTML="User name or password can not be empty. Please fill in username and password..";
        
        }
        location.reload(); 
    })
})

