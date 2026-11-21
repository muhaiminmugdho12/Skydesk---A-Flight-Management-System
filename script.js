function validateLogin() {
  let email = document.getElementById("loginEmail").value.trim();
  let password = document.getElementById("loginPassword").value;
  let error = document.getElementById("loginError");

  error.textContent = "";

  if (email === "") {
    error.textContent = "Please enter your email.";
    return false;
  }

  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    error.textContent = "Please enter a valid email address.";
    return false;
  }

  if (password === "") {
    error.textContent = "Please enter your password.";
    return false;
  }

  if (password.length < 6) {
    error.textContent = "Password must be at least 6 characters.";
    return false;
  }

  alert("Login form is valid!");
  return true;
}



function validateSignup() {
  let fullName = document.getElementById("fullName").value.trim();
  let email = document.getElementById("signupEmail").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let password = document.getElementById("signupPassword").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let terms = document.getElementById("terms").checked;
  let error = document.getElementById("signupError");

  error.textContent = "";

  if (fullName === "") {
    error.textContent = "Please enter your full name.";
    return false;
  }

  if (email === "") {
    error.textContent = "Please enter your email.";
    return false;
  }

  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    error.textContent = "Please enter a valid email address.";
    return false;
  }

  if (phone === "") {
    error.textContent = "Please enter your phone number.";
    return false;
  }

  if (isNaN(phone) || phone.length < 10) {
    error.textContent =
      "Please enter a valid phone number (at least 10 digits).";
    return false;
  }

  if (password === "") {
    error.textContent = "Please enter a password.";
    return false;
  }

  if (password.length < 6) {
    error.textContent = "Password must be at least 6 characters.";
    return false;
  }

  if (confirmPassword === "") {
    error.textContent = "Please confirm your password.";
    return false;
  }

  if (password !== confirmPassword) {
    error.textContent = "Passwords do not match.";
    return false;
  }

  if (!terms) {
    error.textContent = "Please agree to the Terms and Privacy Policy.";
    return false;
  }

  alert("Account created successfully!");
  return true;
}
function validateFlightForm() {
  let fromCity = document.getElementById("fromCity").value;
  let toCity = document.getElementById("toCity").value;
  let departDate = document.getElementById("departDate").value;
  let returnDate = document.getElementById("returnDate").value;
  let error = document.getElementById("flightError");

  error.textContent = "";

  if (
    fromCity === "" ||
    toCity === "" ||
    departDate === "" ||
    returnDate === ""
  ) {
    error.textContent = "Please fill up all information.";
    return false;
  }

  if (fromCity === toCity) {
    error.textContent = "From and To city cannot be the same.";
    return false;
  }

  if (returnDate < departDate) {
    error.textContent = "Return date cannot be earlier than depart date.";
    return false;
  }

  alert("Flight booked from " + fromCity + " to " + toCity + "!");
  return true;
}