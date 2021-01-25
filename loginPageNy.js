let menuBtn = document.getElementById("menuBtn");
let loginPage = document.getElementById("loginPage");
let welcomePage = document.getElementById("welcomePage");

menuBtn.addEventListener ("click", function () {
    loginPage.style.display="block";
    welcomePage.style.display="none";
});


localStorage.setItem("userName", "Janne");
localStorage.setItem("passWord", "test");
let userNameKey = localStorage.getItem("userName");
let passWordKey = localStorage.getItem("passWord");
console.log(userNameKey);
console.log(passWordKey);

let userName = document.getElementById("userName")
let passWord = document.getElementById("passWord");
let loginBtn = document.getElementById("loginBtn");
console.log(loginBtn);
loginBtn.addEventListener("click",function () {
if (localStorage.getItem("userName")==userName.value&&localStorage.getItem("passWord")==passWord.value) {
    console.log("It exist!")
}
else {
    console.log("It dose not exist!")
}
})
 