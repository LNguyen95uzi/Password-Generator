// Assignment Code - arrays of possible character list

function generatePassword() {
  var passwordText = document.querySelector("#password");
  var lowercaseAlpha = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "!@#$%^&*()_-+=|\}{:;<,>.?/~`" + "'" + '"';
  var password = "";
  var available = "";
  var validPass = false;
  var validChars = false;

// Describes length requirements for password (between 8 and 128 characters)

  while (!validPass) {
    var passwordLength = prompt("Password length must be between 8 and 128 characters, please choose a length within the range.");

    if (passwordLength == null) {
      return;
    } else if (passwordLength < 8) {
      alert("Password must be longer than 8 characters!");
    } else if (passwordLength > 128) {
      alert("Password must be shorter than 128 characters!");
    } else if (isNaN(passwordLength)) {
      alert("Please choose your length of passowrd.");
    } else {
      validPass = true;
    }
  }

  //Prompts to get conditional statements for password generator
  while (!validChars) {
    var useLowerCase = confirm("Do you want to use lowercase characters?");

    var useUpperCase = confirm("Do you want to use uppercase characters?");

    var useNumbers = confirm ("Do you want to use numbers?");

    var useSpecial = confirm("Do you want to use special characters?");

    if (useLowerCase === false && useUpperCase === false && useNumbers === false && useSpecial === false) {
      alert("One character type must be selected.");
    } else {
      validChars = true;
    }
  }

  // If statements for including or excluding conditionals
  if (useLowerCase) {
    available += lowercaseAlpha;
  }
  if (useUpperCase) {
    available += uppercaseAlpha;
  }
  if (useNumbers) {
    available += numbers;
  }
  if (useSpecial) {
    available += special;
  }

  for (var i = 0; i < passwordLength; i++) {
    password += available.charAt(Math.floor(Math.random() * available.length));
  }
  passwordText.innerHTML = password;
}

// Generate Password Button and to Event Listener to initiate prompt
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", generatePassword);