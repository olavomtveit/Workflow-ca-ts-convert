const contactForm: any = document.getElementById("contactForm");
contactForm.addEventListener("submit", validateForm);

function validateForm(event: any) {
  event.preventDefault();

  const firstName: any = document.getElementById("firstName");
  const firstNameError: any = document.getElementById("firstNameError");
  const firstNameValue = firstName.value;
  const firstNameValidated: any = document.getElementById("firstNameValidated");

  const lastName: any = document.getElementById("lastName");
  const lastNameError: any = document.getElementById("lastNameError");
  const lastNameValue = lastName.value;
  const lastNameValidated: any = document.getElementById("lastNameValidated");

  const email: any = document.getElementById("email");
  const emailError: any = document.getElementById("emailError");
  const invalidEmailError: any = document.getElementById("invalidEmailError");
  const emailValue = email.value;
  const emailValidated: any = document.getElementById("emailValidated");

  const message: any = document.getElementById("message");
  const messageError: any = document.getElementById("messageError");
  const messageValue = message.value;
  const messageValidated: any = document.getElementById("messageValidated");

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
    emailValidated.style.display = "block";
  } else {
    emailError.style.display = "block";
  }

  function validateEmail(email: string) {
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

  if (messageValue.length >= 10 && validateEmail(emailValue)) {
    messageValidated.style.display = "block";
  }
}

function checkInputLength(value: string) {
  const trimmedValue = value.trim();
  console.log(value + " | " + trimmedValue);

  if (trimmedValue.length > 0) {
    return true;
  } else {
    return false;
  }
}
