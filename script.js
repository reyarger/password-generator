// Assignment Code
var generateBtn = document.querySelector("#generate");
var loChar = "abcdefghijklmnopqrstuvwxyz"
var upChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var specChar = "~!@#$%^&*()_+"
var numChar = "1234567890"



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// create base generate function
function generatePassword() {
  var passwordLength = prompt("How many characters between 1-128 should your password be?");

//user input validation
  if (passwordLength == "") {
        alert("password length is required!");
        var altPasswordLength = prompt("please enter a valid number for password length");
        console.log(passwordLength);
        console.log(altPasswordLength);
      }
      else if (passwordLength<8 || passwordLength>128) {
        alert("please choose a number within scope!");
        newAltPasswordLength=prompt("please enter a valid number for password length");
      };
  let complexity=parseInt(passwordLength);
  console.log(complexity)

//prompt user for remaining password criteria
  var passwordLower= confirm("Should lowercase characters be included?");
  var passwordUpper= confirm("Should uppercase letters be included?");
  var passwordSpecial= confirm("Should special characters be included?");
  var passwordNumeric= confirm ("Should numeric values be included?");

  console.log(passwordLower);

// Setting variable value combinations for password criteria depending on user confirm answers
  if(passwordLower==true && passwordUpper==true && passwordSpecial==true && passwordNumeric==true){
    var criteriaValues= loChar + upChar + specChar + numChar;
  }
  else if (passwordLower==true && passwordUpper==true && passwordSpecial==true && passwordNumeric==false){
    var criteriaValues = loChar + upChar + specChar;
  }
  else if (passwordLower==true && passwordUpper==true && passwordSpecial==false && passwordNumeric==true){
    var criteriaValues = loChar + upChar + numChar;
  }
  else if (passwordLower==true && passwordUpper==false && passwordSpecial==true && passwordNumeric==true){
    var criteriaValues = loChar + numChar + specChar;
  }
  else if (passwordLower==false && passwordUpper==true && passwordSpecial==true && passwordNumeric==false){
    var criteriaValues = numChar + upChar + specChar;
  }
  else if (passwordLower==true && passwordUpper==true && passwordSpecial==false && passwordNumeric==false){
    var criteriaValues = loChar + upChar;
  }
  else if (passwordLower==true && passwordUpper==false && passwordSpecial==true && passwordNumeric==false){
    var criteriaValues = loChar + specChar;
  }
  else if (passwordLower==false && passwordUpper==true && passwordSpecial==true && passwordNumeric==false){
    var criteriaValues = upChar+ specChar;
  }
  else if (passwordLower==true && passwordUpper==false && passwordSpecial==false && passwordNumeric==true){
    var criteriaValues = loChar + numChar;
  }
  else if (passwordLower==false && passwordUpper==true && passwordSpecial==false && passwordNumeric==true){
    var criteriaValues = upChar + numChar;
  }
  else if (passwordLower==false && passwordUpper==false && passwordSpecial==true && passwordNumeric==true){
    var criteriaValues = specChar + numChar;
  }
  else if (passwordLower==false && passwordUpper==false && passwordSpecial==false && passwordNumeric==true){
    var criteriaValues = numChar;
  }
  else if (passwordLower==false && passwordUpper==false && passwordSpecial==true && passwordNumeric==false){
    var criteriaValues = specChar;
  }
  else if (passwordLower==false && passwordUpper==true && passwordSpecial==false && passwordNumeric==false){
    var criteriaValues = upChar;
  }
  else if (passwordLower==true && passwordUpper==false && passwordSpecial==false && passwordNumeric==false){
    var criteriaValues = loChar;
  }
  else{
    alert("You must have at least one criteria")
  }

 
// creating a loop for password characters to be randomized based on user input length and criteria

 for (var i = 0; i < complexity; i++){
 password= password + criteriaValues.charAt(Math.floor(Math.random()* Math.floor(criteriaValues.length -1)));
}
console.log(password);
document.getElementById("password").value=password;
}



// console.log(passwordnew);
// console.log(generatePassword());

//add password to textbox/display 
// document.getElementById("").value="password"




// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page