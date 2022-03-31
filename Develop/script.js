

function generatePassword(){
  //TODO: your code goes here

  // gather user preferences
  var hasUppercase = confirm("Would you like any UpperCAse letters?");
  var hasLowercase = confirm("Would you like any LowerCase letters?");
  var hasSpecialChar = confirm("Would you like any special characters?");
  var hasNums = confirm("Would you like any numbers?")
  var pWLength = parseInt(prompt("Please enter password length btw 8-128.", "8"), 10)

  // generate password characters
  var upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerCaseSet = "abcdefghijklmnopqrstuvwxyz"
  var numSet = "0123456789"
  var specialSet = "!#$%_&- *"

  var pWBuffer = []
  if (hasUppercase) {
    var randomChar = getRandomCharFromSet(upperCaseSet); 
    pWBuffer.push(randomChar)
  }
  if (hasLowercase) {
    var randomChar = getRandomCharFromSet(lowerCaseSet); 
    pWBuffer.push(randomChar);
  }
  if (hasNums) {
    var randomChar = getRandomCharFromSet(numSet);
    pWBuffer.push(randomChar);
  }
  if (hasSpecialChar) {
    var randomChar = getRandomCharFromSet(specialSet);
    pWBuffer.push(randomChar);
  }


  for ( i=0; i < pWLength; i++) {

    pWBuffer.push(getRandomCharFromSet(upperCaseSet));
  }
  // shuffle password chars



  return pWBuffer.join("");
}

function getRandomCharFromSet(charSet){
  var dice = Math.floor(Math.random() * charSet.length);
  return charSet.charAt(dice);
}

// Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
