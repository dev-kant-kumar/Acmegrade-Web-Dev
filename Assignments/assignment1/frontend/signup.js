// accessing dom section
const userFullName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const userPassword = document.querySelector("#password");
const userCpassword = document.querySelector("#cpassword");

const cpasswordToggler = document.querySelector("#cpassword-toggle");
const passwordToggler = document.querySelector("#password-toggle");

const showIcon = `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316l-.105-.316C21.927 11.617 19.633 5 12 5m0 11c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4"
                    />
                    <path
                      fill="currentColor"
                      d="M12 10c-1.084 0-2 .916-2 2s.916 2 2 2s2-.916 2-2s-.916-2-2-2"
                    />
                  </svg>`;

const hideIcon = ` <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"
                  />
                </svg>`;

const errorBox = document.querySelectorAll(".error-box");
const nameError = errorBox[0];
const emailError = errorBox[1];
const passwordError = errorBox[2];
const cpasswordError = errorBox[3];

const signUpForm = document.querySelector("#signup-form");
const submitBtn = document.querySelector(".submit-btn");

// data store
const userData = [];
console.log(userData);

let isInputValid = true;
// functions section

const nameValidate = () => {
  const name = userFullName.value.trim();
  nameError.style.display = "none";
  const namePattern = /^[A-Za-z\s]+$/;

  if (!name) {
    nameError.style.display = "block";
    nameError.textContent = "Name is required.";
    isInputValid = false;
  } else if (!namePattern.test(name)) {
    nameError.style.display = "block";
    nameError.textContent = "Only letters and spaces are allowed in name.";
    isInputValid = false;
  }
};

const emailValidate = () => {
  const email = userEmail.value.trim();
  emailError.style.display = "none";
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email) {
    emailError.style.display = "block";
    emailError.textContent = "Email is required.";
    isInputValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.style.display = "block";
    emailError.textContent = "Please enter a valid email address.";
    isInputValid = false;
  }
};
const passwordValidate = () => {
  const password = userPassword.value;
  passwordError.style.display = "none";
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

  if (!password) {
    passwordError.style.display = "block";
    passwordError.textContent = "Password is required.";
    isInputValid = false;
  } else if (!passwordPattern.test(password)) {
    passwordError.style.display = "block";
    passwordError.textContent =
      "Password must include uppercase, lowercase, number, and special character.";
    isInputValid = false;
  }
};
const cpasswordValidate = () => {
  const password = userPassword.value;
  const cpassword = userCpassword.value;
  cpasswordError.style.display = "none";

  if (!cpassword) {
    cpasswordError.style.display = "block";
    cpasswordError.textContent = "Please confirm your password.";
    isInputValid = false;
  } else if (password != cpassword) {
    cpasswordError.style.display = "block";
    cpasswordError.textContent = "Passwords do not match.";
    isInputValid = false;
  }
};

passwordToggler.addEventListener("click", () => {
  if (userPassword.type == "password") {
    userPassword.type = "text";
    passwordToggler.innerHTML = hideIcon;
  } else {
    userPassword.type = "password";
    passwordToggler.innerHTML = showIcon;
  }
});

cpasswordToggler.addEventListener("click", () => {
  if (userCpassword.type == "password") {
    userCpassword.type = "text";
    cpasswordToggler.innerHTML = hideIcon;
  } else {
    userCpassword.type = "password";
    cpasswordToggler.innerHTML = showIcon;
  }
});

userFullName.addEventListener("input", nameValidate);
userEmail.addEventListener("input", emailValidate);
userPassword.addEventListener("input", passwordValidate);
userCpassword.addEventListener("input", cpasswordValidate);

signUpForm.addEventListener("submit", (e) => {
  isInputValid = true;
  e.preventDefault();

  nameValidate();
  emailValidate();
  passwordValidate();
  cpasswordValidate();

  if (isInputValid) {
    const name = userFullName.value.trim();
    const email = userEmail.value.trim();
    const password = userPassword.value;
    const newUser = { name, email, password };
    userData.push(newUser);
    console.log(userData);
    alert("Account created successfully");
    signUpForm.reset();
  }
});
