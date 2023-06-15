const currentPage = window.location.pathname;
const navLinksColor = document.querySelectorAll('nav a');
navLinksColor.forEach(link => {
  if (link.href.includes(`${currentPage}`)) {
    link.classList.add('active');
  }
});

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // prevents form submission from refreshing the page

  if (isValidName() && isValidSurname() && isValidEmail() && isValidPhone() && isValidDisability()) {
    alert(userInputName());
    document.getElementById("contactForm").reset();
    // document.getElementById("contactForm").style.visibility = "hidden";
  }
});
//Validating the email
function isValidName() {
  const name = document.getElementById('inputName').value;
  const nameReg = /^[A-Za-z '-]+$/;

  if (name === '') {
    alert('Please enter your name');
    return false;
  } else if (!nameReg.test(name)) {
    alert('Name is not valid');
    return false;
  } else {
    return true;
  }
}
//Validating the email
function isValidSurname() {
  const surname = document.getElementById('inputSurname').value;
  const surnameReg = /^[A-Za-z '-]+$/;

  if (surname === '') {
    alert('Please enter your surname');
    return false;
  } else if (!surnameReg.test(surname)) {
    alert('Surname is not valid');
    return false;
  } else {
    return true;
  }
}
//Validating email
function isValidEmail() {
  const email = document.getElementById('inputEmail').value;
  const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email === '') {
    alert('Please enter your email');
    return false;
  } else if (!emailReg.test(email)) {
    alert('Email is not valid');
    return false;
  } else {
    return true;
  }
}
//For contact us
function isValidPhone() {
  const phone = document.getElementById('inputNum').value;
  const phoneReg = /^\d{10}$/; // match 10 digits

  if (phone === '') {
    alert('Please enter your phone number');
    return false;
  } else if (!phoneReg.test(phone)) {
    alert('Phone Number is not valid');
    return false;
  } else {
    return true;
  }
}
//Validating the disability
function isValidDisability() {
  const disabilityOption = document.querySelector('input[name="disabilityOption"]:checked').value;
  const disabilityDetails = document.getElementById("inputDisabilityDetails").value;

  if (disabilityOption === "Yes" && disabilityDetails === '') {
    alert('Please specify your disability');
    return false;
  } else {
    return true;
  }
}

function userInputName() {
  var inputName = document.getElementById('inputName').value;
  var inputSurname = document.getElementById('inputSurname').value;
  var fullName = inputName + " " + inputSurname;
  document.getElementById('nameInput').innerHTML = fullName;
  return "Thank you " + fullName + " for getting in contact with us. We will get back to you with an answer shortly.";
}

// Alert values
function showAlert(message) {
  alert(message);
}

// Function to validate the form inputs
function validateForm() {
  var firstName = document.getElementById("inputName").value;
  var lastName = document.getElementById("inputSurname").value;
  var contactNumber = document.getElementById("inputNum").value;
  var emailAddress = document.getElementById("inputEmail").value;
  var comments = document.getElementById("inputMessage").value;

  // Checking if the first name field is empty
  if (firstName === "") {
    showAlert("Please enter your first name");
    return false;
  }

  // Checking if the last name field is empty
  if (lastName === "") {
    showAlert("Please enter your last name");
    return false;
  }

  // Checking if the contact number field is empty
  if (contactNumber === "") {
    showAlert("Please enter your contact number");
    return false;
  }

  // Checking if the email address field is empty
  if (emailAddress === "") {
    showAlert("Please enter your email address");
    return false;
  }

  // Checking if the comments field is empty
  if (comments === "") {
    showAlert("Please enter your comments");
    return false;
  }

  return true;
}

// Add event listener to the form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  if (validateForm()) {
    // Form is valid, show the popup
    document.getElementById("popup").style.display = "block";
    document.getElementById("contactForm").reset(); // Reset the form
  }
});

// Add event listener to close the popup
document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});

// Function to validate the grade input
function validateGrade(input) {
  var gradePattern = /^[1-9]|1[0-2]$/; // Regular expression pattern for grade validation

  if (!gradePattern.test(input.value.toUpperCase())) {
    input.setCustomValidity("Invalid grade. Please enter a number from 1 to 12 or 'R'.");
  } else {
    input.setCustomValidity(""); // Reset the custom validation message
  }
}

// Function to validate the name input
function validateName(input) {
  const name = input.value;
  const pattern = /^[a-zA-Z]+$/;
  const isValid = pattern.test(name);

  if (!isValid) {
    alert('Please enter only letters for the name and surname.');
    input.value = '';
  }
} 
   
// Function to validate the contact number input
function validateContactNumber() {
  const contactNumber = document.getElementById('inputNum').value;

  // Remove any non-digit characters from the contact number
  const cleanedContactNumber = contactNumber.replace(/\D/g, '');

  // Check if the cleaned contact number has exactly 10 digits
  if (cleanedContactNumber.length !== 10) {
    alert('Please enter a 10-digit contact number.');
    return false;
  }

  
  // If all checks pass, the contact number is valid
  return true;
}

// Function to show/hide disability details input based on the disability option
function showDisabilityDetails() {
  const disabilityOption = document.querySelector('input[name="disabilityOption"]:checked').value;
  const disabilityDetails = document.getElementById("disabilityDetails");

  if (disabilityOption === "Yes") {
    disabilityDetails.innerHTML = '<label for="inputDisabilityDetails">Specify Disability:</label>' +
      '<input type="text" name="disabilityDetails" class="form-control" id="inputDisabilityDetails" required>';
  } else {
    disabilityDetails.innerHTML = '';
  }
}

// Add event listener to the disability option inputs
document.querySelectorAll('input[name="disabilityOption"]').forEach(function (input) {
  input.addEventListener('change', showDisabilityDetails);
});

// Function to validate the disability input
function validateDisability() {
  const disabilityOption = document.querySelector('input[name="disabilityOption"]:checked').value;

  // If disability option is selected as "Yes"
  if (disabilityOption === "Yes") {
    const disabilityDetails = document.getElementById("inputDisabilityDetails").value;

    // Checking if the disability details field is empty
    if (disabilityDetails === "") {
      alert("Please enter your disability details");
      return false;
    }
  }

  return true;
}

// Add event listener to the form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  if (validateContactNumber() && validateDisability()) {
    setTimeout(function () {
      document.getElementById("contactForm").submit();
    }, 0);
  }
});


//Modified code for contact number.

//validating the contact number in the contact form
function validateContactNumber(formId) {
  const contactNumber = document.getElementById(formId).querySelector('.inputNum').value;

  // Remove any non-digit characters from the contact number
  const cleanedContactNumber = contactNumber.replace(/\D/g, '');

  // Check if the cleaned contact number has exactly 10 digits
  if (cleanedContactNumber.length !== 10) {
    alert('Please enter a 10-digit contact number.');
    return false;
  }

  // If all checks pass, the contact number is valid
  return true;
}

// Contact Us Form
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  if (validateForm() && validateContactNumber("contactForm") && validateDisability()) {
    // Form is valid, show the popup
    document.getElementById("popup").style.display = "block";
    document.getElementById("contactForm").reset(); // Reset the form
  }
});

// Apply Form
document.getElementById("applyForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  if (validateForm() && validateContactNumber("applyForm") && validateDisability()) {
    // Form is valid, show the popup
    document.getElementById("popup").style.display = "block";
    document.getElementById("applyForm").reset(); // Reset the form
  }
});

// Enroll Form
document.getElementById("enrollForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  if (validateForm() && validateContactNumber("enrollForm") && validateDisability()) {
    // Form is valid, show the popup
    document.getElementById("popup").style.display = "block";
    document.getElementById("enrollForm").reset(); // Reset the form
  }
});