const passwordField = document.querySelector("#password");
const passwordConfirmationField = document.querySelector("#confirm-password");
const errorMessagesList = document.querySelector(".error-messages");


function matchPasswords() {
    if (passwordField.value.length === 0 ||
        passwordConfirmationField.value.length === 0) {
        errorMessagesList.removeChild(errorMessagesList.firstChild);
        passwordField.className = "";
        passwordConfirmationField.className = "";
        return;
    }

    if (passwordField.value === passwordConfirmationField.value) {
        errorMessagesList.removeChild(errorMessagesList.firstChild);
        passwordField.className = "passwords-matching";
        passwordConfirmationField.className = "passwords-matching";
    } else {
        
        if (!errorMessagesList.hasChildNodes()) {
            let newError = document.createElement("li");
            newError.textContent = "Passwords do not match";
            errorMessagesList.appendChild(newError);
            passwordField.className = "passwords-not-matching";
            passwordConfirmationField.className = "passwords-not-matching";
        }
    }

}

passwordField.addEventListener("input", matchPasswords);
passwordConfirmationField.addEventListener("input", matchPasswords);