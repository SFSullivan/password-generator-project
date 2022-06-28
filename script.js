// Assignment Code
var generateBtn = document.querySelector("#generate");


const alphaCap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphaLow = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const specialChar = '!#$%&,-./:;<=>?@^_`{|}~'


//password generating function
function generatePassword() {

  var passFramework = '';
  var createdPassword = '';
 
// if statement for desired password length  
  var passlength = prompt('Please decide the length of your password (8-128 Characters)');

  if (passlength === null) {
    return '';
  }

  if (passlength < 8 || passlength > 128) {
    alert ('You need to select a number between 8 and 128')
    return generatePassword();
  }

//if statements for variables desired
  var passnumbers = confirm('Press okay if you would like to include numbers');
  var uppercase = confirm('Press okay if you would like capital letters');
  var lowercase = confirm('Press okay if you would like lowercase letters');
  var specCharacter = confirm('Press okay if you would like to use special characters');

  if (passnumbers === true) {
    passFramework += numbers
  }

  if (uppercase === true) {
    passFramework += alphaCap
  }
  
  if (lowercase === true) {
    passFramework += alphaLow
  }

  if (specCharacter === true) {
    passFramework += specialChar
  }

  if (passFramework.length === 0) {
    var tryagain = confirm('At least one character type needs to be selected. Try again?');
    if (tryagain = true) {
      return generatePassword();
    }
  }


  //for statement for combing all elements into randomly generated order
  for (var i = 0; i < passlength; i++) {
    createdPassword += passFramework.charAt(Math.floor(Math.random()*passFramework.length))

    console.log(createdPassword)
  }

  return createdPassword;

}


// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
