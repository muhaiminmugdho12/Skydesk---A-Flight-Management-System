function validatePassengerForm() {
  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let dob = document.getElementById("dob").value;
  let nidOrPassport = document.getElementById("nidOrPassport").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let extraBaggage = document.getElementById("extraBaggage").value;
  let error = document.getElementById("passengerError");

  error.textContent = "";

  if (
    firstName === "" ||
    lastName === "" ||
    dob === "" ||
    nidOrPassport === "" ||
    email === "" ||
    phone === "" ||
    extraBaggage === ""
  ) {
    error.textContent = "Please fill up all information.";
    return false;
  }

  if (nidOrPassport.length < 6) {
    error.textContent = "Please enter a valid NID or passport number.";
    return false;
  }

  if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
    error.textContent = "Please enter a valid email address.";
    return false;
  }

  if (isNaN(phone) || phone.length < 10) {
    error.textContent = "Please enter a valid phone number.";
    return false;
  }

  alert("Passenger details saved! Continuing to payment...");
  return true;
}

function validatePaymentForm() {
  let paymentMethod = document.getElementById("paymentMethod").value;
  let cardNumber = document.getElementById("cardNumber").value.trim();
  let expiryDate = document.getElementById("expiryDate").value.trim();
  let cvvCode = document.getElementById("cvvCode").value.trim();
  let cardName = document.getElementById("cardName").value.trim();
  let error = document.getElementById("paymentError");

  error.textContent = "";

  if (
    paymentMethod === "" ||
    cardNumber === "" ||
    expiryDate === "" ||
    cvvCode === "" ||
    cardName === ""
  ) {
    error.textContent = "Please fill up all information.";
    return false;
  }

  if (isNaN(cardNumber) || cardNumber.length < 12 || cardNumber.length > 16) {
    error.textContent = "Please enter a valid card number (12 to 16 digits).";
    return false;
  }

  if (expiryDate.indexOf("/") === -1 || expiryDate.length !== 5) {
    error.textContent = "Please enter expiry date in MM/YY format.";
    return false;
  }

  if (isNaN(cvvCode) || cvvCode.length < 3 || cvvCode.length > 4) {
    error.textContent = "Please enter a valid CVV (3 or 4 digits).";
    return false;
  }

  if (cardName.length < 2) {
    error.textContent = "Please enter name on card.";
    return false;
  }

  alert("Payment successful!");
  return true;
}
