var contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", validateForm);
function validateForm(event) {
    event.preventDefault();
    var firstName = document.getElementById("firstName");
    var firstNameError = document.getElementById("firstNameError");
    var firstNameValue = firstName.value;
    var firstNameValidated = document.getElementById("firstNameValidated");
    var lastName = document.getElementById("lastName");
    var lastNameError = document.getElementById("lastNameError");
    var lastNameValue = lastName.value;
    var lastNameValidated = document.getElementById("lastNameValidated");
    var email = document.getElementById("email");
    var emailError = document.getElementById("emailError");
    var invalidEmailError = document.getElementById("invalidEmailError");
    var emailValue = email.value;
    var emailValidated = document.getElementById("emailValidated");
    var message = document.getElementById("message");
    var messageError = document.getElementById("messageError");
    var messageValue = message.value;
    var messageValidated = document.getElementById("messageValidated");
    if (checkInputLength(firstNameValue)) {
        firstNameError.style.display = "none";
        firstNameValidated.style.display = "block";
    }
    else {
        firstNameError.style.display = "block";
    }
    if (checkInputLength(lastNameValue)) {
        lastNameError.style.display = "none";
        lastNameValidated.style.display = "block";
    }
    else {
        lastNameError.style.display = "block";
    }
    if (checkInputLength(emailValue)) {
        emailError.style.display = "none";
        emailValidated.style.display = "block";
    }
    else {
        emailError.style.display = "block";
    }
    function validateEmail(email) {
        var regEx = /\S+@\S+\.\S+/;
        return regEx.test(email);
    }
    if (validateEmail(emailValue)) {
        invalidEmailError.style.display = "none";
    }
    else {
        invalidEmailError.style.display = "block";
    }
    if (messageValue.length >= 10) {
        messageError.style.display = "none";
    }
    else {
        messageError.style.display = "block";
    }
    if (messageValue.length >= 10 && validateEmail(emailValue)) {
        messageValidated.style.display = "block";
    }
}
function checkInputLength(value) {
    var trimmedValue = value.trim();
    console.log(value + " | " + trimmedValue);
    if (trimmedValue.length > 0) {
        // this can be single line return.   return trimmedValue.length > 0;  because it will return a boolean so no need for the long if else
        return true;
    }
    else {
        return false;
    }
}

module.exports = validateForm;
