// Get Date from localstorge
let get_user = localStorage.getItem("username");
let get_email = localStorage.getItem("email");

// Varibles
let userInput = document.getElementById("changeName");
let userEmailInput = document.getElementById("changeEmail");
let editForm = document.getElementById("edit-profile-form");
// setting Value of inputs
userInput.value = get_user;
userEmailInput.value = get_email;

// Events
editForm.addEventListener("submit", editProfileDate);
function editProfileDate(e) {
    e.preventDefault();
    localStorage.setItem("username", userInput.value);
    localStorage.setItem("email", userEmailInput.value);

    setTimeout(() => {
        window.location = "profile.html";
    }, 500);
}
