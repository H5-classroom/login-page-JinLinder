
var afterLoginTemplate = `<div id="afterLoginPage">
<P>Welcome! You have logged in!</P>
<button>Log out</button>
</div>`;
let content = document.getElementById("content");
if (localStorage.getItem("userName")==null) { 
    content.innerHTML= "Hej logga in tack!";
} else {
    content.innerHTML= afterLoginTemplate;
}

let menuBtn = document.getElementById("menuBtn");
let loginPage = document.getElementById("loginPage");
let welcomePage = document.getElementById("welcomePage");

// button i meny, klick för att visa inlogningssida
menuBtn.addEventListener ("click", function () {
    loginPage.style.display="block";
    welcomePage.style.display="none";
});

//localStorage key och value
//localStorage.setItem("userName", "Janne");
//localStorage.setItem("passWord", "test");
let userNameKey = localStorage.getItem("userName");
let passWordKey = localStorage.getItem("passWord");
console.log(userNameKey);
console.log(passWordKey);

let userName = document.getElementById("userName")
let passWord = document.getElementById("passWord");
let loginBtn = document.getElementById("loginBtn");
console.log(loginBtn);

//logginsida button klick och kolla om input value finns i localStorage
loginBtn.addEventListener("click",function () {
if (localStorage.getItem("userName")==userName.value && localStorage.getItem("passWord")==passWord.value) {
    console.log("It exist!")
    localStorage.setItem("userName", "Janne");
}
else {
    console.log("It dose not exist!");
    //loginBtn.insertAdjacentHTML("afterend", "<P> User name or password is wrong. Please try again.</p>");
    let message = document.createElement("p");
    message.innerHTML = "User name or password is wrong. Please try again.";
    loginPage.appendChild(message);
    
}
});
 