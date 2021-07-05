var generateBtn = document.querySelector("#generate");

var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "*", "+", ",", "-", ".", "/", "=", "?", "@", "^", "_", "|", "~"];


// Start function to create password
function writePassword() {

  // Asks for user input
  let userInput = (prompt("How long will your password be? \nMust be between 8-128 characters"));
  // First if statement = cancel, exit function 
  if (!userInput) {
    return;
    //Second if statement = input must be within range 8-128
  } else if (userInput < 8 || userInput > 128) {
    userInput = (prompt("Password must be between 8-128 characters"));
  } else {
    // Continue with valid input 
    confirmLowercase = confirm("Will password contain lowercase letters?");
    confirmUppercase = confirm("Will password contain uppercase letters?");
    confirmNumber = confirm("Will password contain numbers?");
    confirmSpecial = confirm("Will password contain special characters?");
  };

  //if user chooses all 4
  if (confirmLowercase && confirmUppercase && confirmNumber && confirmSpecial) {
    result = alphaLower.concat(alphaUpper, numbers, special)
    //if user picks 3 of 4
  } else if (confirmLowercase && confirmUppercase && confirmNumber) {
    result = alphaLower.concat(alphaUpper, numbers)
  } else if (confirmLowercase && confirmUppercase && confirmSpecial) {
    result = alphaLower.concat(alphaUpper, special)
  } else if (confirmLowercase && confirmNumber && confirmSpecial) {
    result = alphaLower.concat(numbers, special)
  } else if (confirmUppercase && confirmNumber && confirmSpecial) {
    result = alphaUpper.concat(numbers, special)
    // if user picks 2 of 4  
  } else if (confirmLowercase && confirmUppercase) {
    result = alphaLower.concat(alphaUpper)
  } else if (confirmLowercase && confirmNumber) {
    result = alphaLower.concat(numbers)
  } else if (confirmLowercase && confirmSpecial) {
    result = alphaLower.concat(special)
  } else if (confirmUppercase && confirmNumber) {
    result = alphaUpper.concat(numbers)
  } else if (confirmUppercase && confirmSpecial) {
    result = alphaUpper.concat(special)
  } else if (confirmNumber && confirmSpecial) {
    result = numbers.concat(special)
    // if user picks 1 of 4
  } else if (confirmLowercase) {
    result = alphaLower
  } else if (confirmUppercase) {
    result = alphaUpper
  } else if (confirmNumber) {
    result = numbers
  } else if (confirmSpecial) {
    result = special
    //if user picks 0 of 4 - error 
  } else {
    result = alert("You must choose at least 1 critera for your password")
  }


  //sets user input = length of return password characters
  var passwordLength = userInput;

  // sets placeholder as blank to be overwritten
  var passwordResult = [];

  // random selector
  for (let i = 0; i < passwordLength; i++) {
    var passwordChoices = result[Math.floor(Math.random() * result.length)];
    passwordResult.push(passwordChoices);
  }

  //joins arrays and returns a string
  var password = passwordResult.join("");
  userChoices(password);
  return password;
}

// starts function when 'Generate Button' is clicked
generateBtn.addEventListener("click", writePassword)


// writes password value in the "password" text box 
function userChoices(password) {
  document.getElementById("password").textContent = password;
}
