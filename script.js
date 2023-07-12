const firstnameInput = document.querySelector("#first-name-input");
const lastnameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const submitBtn = document.querySelector("#submit-btn");

function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstnameInput.onkeyup = () => {
  firstnameInput.classList.remove("is-valid");
  firstnameInput.classList.remove("is-invalid");
};
lastnameInput.onkeyup = () => {
  lastnameInput.classList.remove("is-valid");
  lastnameInput.classList.remove("is-invalid");
};
emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};
passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};

submitBtn.onclick = () => {
  FirstNameStatus = false;
  LastNameStatus = false;
  EmailStatus = false;
  PasswordStatus = false;

  if (firstnameInput.value === "") {
    firstnameInput.classList.add("is-invalid");
  } else {
    firstnameInput.classList.add("is-valid");
    FirstNameStatus = true;
  }

  if (lastnameInput.value === "") {
    lastnameInput.classList.add("is-invalid");
  } else {
    lastnameInput.classList.add("is-valid");
    LastNameStatus = true;
  }

  if (validateEmail(emailInput.value) === false) {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    EmailStatus = true;
  }

  if (passwordInput.value.length >= 6) {
    passwordInput.classList.add("is-valid");
    PasswordStatus = true;
  } else {
    passwordInput.classList.add("is-invalid");
  }

  if (FirstNameStatus && LastNameStatus && EmailStatus && PasswordStatus) {
    alert("Registered successfully");
  }
};
