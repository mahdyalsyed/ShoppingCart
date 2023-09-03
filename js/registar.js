// Registar User
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let registarBtn = document.querySelector("#sign-up");
registarBtn.addEventListener("click", registar);
function registar(e) {
    e.preventDefault();
    if (username.value === "" || email.value === "" || password.value === "") {
        alert("Please Fill Date");
    } else {
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        setTimeout(() => {
            window.location = "login.html";
        }, 1500);
    }
}
