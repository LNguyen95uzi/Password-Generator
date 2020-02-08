// Assignment Code
var generateBtn = document.querySelector("#generate");

document.getElementById("generate").addEventListener("click", function () {
  prompt("How many characters would you like your password to contain?");
  confirm("Click OK to confirm including special characters.");
  confirm("Click OK to confirm including numeric characters.");
  confirm("Click OK to confirm including lowercase letters.");
  confirm("Click OK to confirm including uppercase letters");
  alert("Your secure password is: ")


})

// var upppercaseEl = document.getElementById("uppercase");
// var lowercaseEl = document.getElementById("lowercase");
// var numbersEl = document.getElementById("numbers");
// var symbolsEl = document.getElementById("symbols");
// var clipboardEl = document.getElementById("clipboard");


var randomFunction = {
  lower: getRandomLower;
  upper: getRandomUpper;
  number: getRandomNumber;
  symbol: getRandomSymbol;
};

  // Write password to the #password input
  function writePassword(lower, upper, number, symbol, length) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", () => {
    var length = +lengthEl.value;
    var hasLower = lowercaseEl.confirmed;
    var hasUpper = upppercaseEl.confirmed;
    var hasNumber = numbersEl.confirmed;
    var hasSymbol = symbolsEl.confirmed;

    result.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
  })
}

// Generate Password function
function generatePassword(lower, upper, number, symbol, length) {
  
}

// Generator Functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
  return symbols[Math.floor(Math.random() * symbols.length)];
