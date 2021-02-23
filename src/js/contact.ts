const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();
// use a code formatter, pretteir to remove these blank lines


  const firstName = document.getElementById("firstName");
  const firstNameError = document.getElementById("firstNameError");
  const firstNameValue = firstName.value;
  const firstNameValidated = document.getElementById("firstNameValidated");

  const lastName = document.getElementById("lastName");
  const lastNameError = document.getElementById("lastNameError");
  const lastNameValue = lastName.value;
  const lastNameValidated = document.getElementById("lastNameValidated");

  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const invalidEmailError = document.getElementById("invalidEmailError");
  const emailValue = email.value;
  const emailValidated = document.getElementById("emailValidated");

  const message = document.getElementById("message");
  const messageError = document.getElementById("messageError");
  const messageValue = message.value;
  const messageValidated = document.getElementById("messageValidated");

   if (checkInputLength(firstNameValue)) {
    firstNameError.style.display = "none";
    firstNameValidated.style.display = "block";
  } else {
    firstNameError.style.display = "block";
  }

  if (checkInputLength(lastNameValue)) {
    lastNameError.style.display = "none";
    lastNameValidated.style.display = "block";
  } else {
    lastNameError.style.display = "block";
  }

  if (checkInputLength(emailValue)) {
    emailError.style.display = "none";
    emailValidated.style.display ="block";
  } else {
    emailError.style.display = "block";
  }

  function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
  }

  if (validateEmail(emailValue)) {
    invalidEmailError.style.display = "none";
  } else {
    invalidEmailError.style.display = "block";
  }

  if (messageValue.length >= 10) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if(messageValue.length >= 10 && validateEmail(emailValue)){
    messageValidated.style.display = "block";
  }
}

function checkInputLength(value) {
  const trimmedValue = value.trim();
  console.log(value + " | " + trimmedValue);

if (trimmedValue.length > 0) { // this can be single line return.   return trimmedValue.length > 0;  because it will return a boolean so no need for the long if else
    return true;
  } else {
    return false;
  }
}
