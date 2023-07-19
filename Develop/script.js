// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  var passwordLength = parseInt(prompt("Enter the length of the password (at least 8 characters and no more than 128 characters):"));

  // Validate the password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert("Invalid password length. Please enter a valid number between 8 and 128.");
      return;
  }

  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
      alert("You must select at least one character type.");
      return;
  }

  var selectedChars = "";
  if (includeLowercase) {
      selectedChars += lowercaseChars;
  }
  if (includeUppercase) {
      selectedChars += uppercaseChars;
  }
  if (includeNumeric) {
      selectedChars += numericChars;
  }
  if (includeSpecial) {
      selectedChars += specialChars;
  }

  var password = generateRandomPassword(passwordLength, selectedChars);
  document.getElementById("password").value = password;
}

function generateRandomPassword(length, chars) {
  var result = "";
  for (var i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
