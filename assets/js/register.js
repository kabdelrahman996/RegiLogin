const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confPassword = document.querySelector("#conf-password");
const regBtn = document.querySelector("#register");
const logBtn = document.querySelector("#log");
const backBtn = document.querySelector(".back-btn");



let users = JSON.parse(localStorage.getItem("users")) || [];

// function to add the users to the localStorage
function updateUsers() {
    localStorage.setItem("users", JSON.stringify(users));
    console.log(users);
}

// function to check if emaial is already exist
function checkEmail() {
    let emailExist = users.find(user => user.email === email.value);
    if (emailExist) {
        alert("Email already exist");
        return false;
        } else {
            return true;
            }
}

// function to create new user
function addUser() {
    const user = {
        username: username.value,
        email: email.value,
        password: password.value
    }
    users.push(user);
}

// function to show successfull message
function regSucceed() {
    alert("Registration successful!");
}

// function to display error message
function errorStyle(element, spanName, message) {
    element.style.border = "1px solid red";
    document.querySelector(`#${spanName}`).textContent = message;

}


//function to check if fields is reguired
function checkFields() {
    let flage = false;
    if (username.value === "") {
        flage = true;
        errorStyle(username, "username-error", "username is required");
    }
    if (email.value === "") {
        flage = true;
        errorStyle(email, "email-error", "email is required");
    }
    if (password.value === "") {
        flage = true;
        errorStyle(password, "password-error", "password is required");
    }
    if (confPassword.value === "") {
        flage = true;
        errorStyle(confPassword, "conf-password-error", "confirm password is required");
    }
    if (password.value !== confPassword.value) {
        flage = true;
        errorStyle(password, "password-error", "password and confirm password must be the same");
        errorStyle(confPassword, "conf-password-error", "password and confirm password must be the same");
    }
    return flage;
}

// function to check form validation
function checkValidation() {
    let flag = true;
    const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^[A-Za-z0-9@$!%*?&]{8,}$/;

    if (!usernameRegex.test(username.value)) {
        flag = false;
        errorStyle(username, "username-error", "Username must be 3-20 characters long and contain only letters and numbers");
    }
    if (!emailRegex.test(email.value)) {
        flag = false;
        errorStyle(email, "email-error", "Invalid email format");
    }
    if (!passwordRegex.test(password.value)) {
        flag = false;
        errorStyle(password, "password-error", "Password must be at least 8 characters long and contain letters, numbers, and special characters");
    }
    return flag;
}

regBtn.addEventListener("click", () => {
        event.preventDefault();
        let isReuired = checkFields();
        let isValid = checkValidation();
        console.log(isReuired);
        if (!isReuired && isValid) { 
            if (checkEmail()) {
                regSucceed();
                addUser();
                updateUsers();
            } else {
                return;
            }

        }

})

logBtn.addEventListener("click", () => {
    event.preventDefault();
    location.assign("./login.html");
})
    
backBtn.addEventListener("click", () => {
    event.preventDefault();
    location.assign("./index.html");
})