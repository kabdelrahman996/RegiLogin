// if seesionStorage === null go to login page
if (sessionStorage.getItem("currentEmail") === null) {
    location.assign("./login.html");
}
let spanName = document.querySelector(".spanName");
let spanUser = document.querySelector(".spanUser");
let spanEmail = document.querySelector(".spanEmail");
let spanPass = document.querySelector(".spanPass");
let logoutBtn = document.querySelector("#logout");


let users = JSON.parse(localStorage.getItem("users"));

//function to get the current user
function getCurrentUser() {
    let currentEmail = sessionStorage.getItem("currentEmail");
    return users.find((user) => user.email === currentEmail);
}

let currentUser = getCurrentUser();

spanName.textContent = currentUser.username;
spanUser.textContent = currentUser.username;
spanEmail.textContent = currentUser.email;
spanPass.textContent = currentUser.password;

logoutBtn.addEventListener("click", () => {
    sessionStorage.removeItem("currentEmail");
    location.assign("./login.html")
})