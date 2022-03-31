

function generatePassword(){
  //TODO: your code goes here

  // gather user preferences
  var hasUppercase = confirm("Would you like any UpperCAse letters?");
  var hasLowercase = confirm("Would you like any LowerCase letters?");
  var hasSpecialChar = confirm("Would you like any special characters?");
  var hasNums = confirm("Would you like any numbers?")
  var pWLength = parseInt(prompt("Please enter password length btw 8-128.", "8"), 10)

  var requestedSets = []

  if (hasUppercase) {
    requestedSets.push('U');
  }
  if (hasLowercase) {
    requestedSets.push('L');
  }
  if (hasNums) {
    requestedSets.push('N');
  }
  if (hasSpecialChar) {
    requestedSets.push('S');
  }

  // generate password characters
  var upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerCaseSet = "abcdefghijklmnopqrstuvwxyz"
  var numSet = "0123456789"
  var specialSet = "!#$%_&- *"

  var pWBuffer = []

  for ( i= 0; i < pWLength; i++) {
    var setDice = Math.floor(Math.random() * requestedSets.length);
    var selectedSet = requestedSets[setDice];
    var selectedChar = ' '

    if (selectedSet == 'U') {
      selectedChar = getRandomCharFromSet(upperCaseSet)
    } else if (selectedSet == 'L') {
      selectedChar = getRandomCharFromSet(lowerCaseSet)
    } else if (selectedSet == 'N') {
      selectedChar = getRandomCharFromSet(numSet)
    } else {
      selectedChar = getRandomCharFromSet(specialSet)
    }
    
    pWBuffer.push(getRandomCharFromSet(upperCaseSet));
  }
  
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
