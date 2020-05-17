// Assignment Code
var generateBtn = document.querySelector("#generate");

// create arrays of password characters
var lowerCharArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCharArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numCharArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specCharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "=", "-", "_", "+"];

// write a function to get user input then construct and return an object with user preferences
function getUserInput() {
  var pwLength = prompt("Please select a password length between 8 and 128");
  if(pwLength < 8 || pwLength > 128) {
    alert("Your password needs to be at least 8 and no more than 128 characters")
  } else {
    var lowerChar = confirm("Do you want lower case letters?");
    var upperChar = confirm("Do you want upper case letters?");
    var numChar = confirm("Do you want numbers?");
    var specChar = confirm("Do you want special characters?");
    var userPreference = { pwLength, lowerChar, upperChar, numChar, specChar
    };
  };
  console.log(userPreference)
  return userPreference;
  
};

// write a function that will take user object and depending on the preferences will construct and return an possibleCharsArray: array of all possible charecters for password 
function possbileCharsArray(userPreference) {
  var allCharArray = [];
  if(userPreference.lowerChar === true) {
    allCharArray = allCharArray.concat(lowerCharArr)
  }
  if(userPreference.upperChar=== true) {
    allCharArray = allCharArray.concat(upperCharArr)
  }
  if(userPreference.numChar === true) {
    allCharArray = allCharArray.concat(numCharArr)
  }
  if(userPreference.specChar === true) {
    allCharArray = allCharArray.concat(specCharArr)
  }
  console.log(allCharArray)
  return allCharArray
};

// write a function that generates a password from random chars
function generatePassword() {
  var userPreference = getUserInput();
  var password = "";
  var allCharArray = possbileCharsArray(userPreference);
  for(var i = 0; i <= userPreference.pwLength; i++ ) {
    password += allCharArray[Math.floor(Math.random() * userPreference.pwLength)];
  }
  console.log(password)
  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);