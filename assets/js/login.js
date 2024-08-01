const iEmail = document.querySelector("#iEmail");
const iPassword = document.querySelector("#iPassword");
const logBtn = document.querySelector("#login");
const regBtn = document.querySelector("#reg");
const backBtn = document.querySelector(".back-btn");


let users = JSON.parse(localStorage.getItem("users")) || [];

// function to check if the user exist 
function checkUser() {
    return (users.find(user => user.email === iEmail.value && user.password === iPassword.value));
}

logBtn.addEventListener("click", () => {
    event.preventDefault();
    let user = checkUser();
    if (user) {
        sessionStorage.setItem("currentEmail", user.email);
        location.assign("./about.html");
    } else {
        alert("invalid email or password");
    }
})

regBtn.addEventListener("click", () => {
    event.preventDefault();
    location.assign("./register.html");
})

backBtn.addEventListener("click", () => {
    event.preventDefault();
    location.assign("./index.html");
})