const password = document.querySelector("#user_password");
const confirmPassword = document.querySelector("#confirm_password");
const passwordAlert = document.querySelector("#password-confirmation");
const submitButton = document.querySelector("#submit-button");

function checkPassword() {
    if (password.value !== confirmPassword.value) {
        passwordAlert.textContent = "*Passwords don't match";
        passwordAlert.style.color = "red";
        confirmPassword.style.borderColor = "red";
        submitButton.disabled = true;
    } else {
        passwordAlert.textContent = "";
        confirmPassword.style.borderColor = "green";
        submitButton.disabled = false;
    }
}

password.addEventListener("input", () => {
    checkPassword();
})

confirmPassword.addEventListener("input", () => {
    checkPassword();
})