// Assignment Code
var generateBtn = document.querySelector("#generate");

const alphaCap = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const alphaLow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '+', '{', '}', '>', '<', '?', '+', '-', '/', '[', ']', '~'];


function generatePassword() {
  
  var passlength = prompt('Please decide the length of your password (8-128 Characters)');
  var uppercase = confirm('Press okay if you would like capital letters');
  var lowercase = confirm('Press okay if you would like lowercase letters');
  var specCharacter = confirm('Press okay if you would like to use special characters');

  if (passlength < 8) {
    alert('You need to select a number greater than 8');
    return generatePassword();
  }
  
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  



}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
