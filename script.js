// Assignment Code
var generateBtn = document.querySelector("#generate");
// var criteriaPrompt = prompt("How long should the password be?");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// creation of user input prompts for criteria
function criteriaPrompt() {
  var passwordLength = prompt("How many characters between 1-128 should your password be?");
//validation of user input with a conditional statement 
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
  //remaining user input criteria using confirm statements (true/false answer)
  var passwordLower= confirm("Should lowercase characters be included?");
  var passwordUpper= confirm("Should uppercase letters be included?");
  var passwordSpecial= confirm("Should special characters be included?");
  var passwordNumeric= confirm ("Should numeric values be included?");
  
}
generateBtn.addEventListener("click", criteriaPrompt);




// create base generate function
// function generate() {
//   let complexity=passwordLength.value;
//   let values="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
//   let passwordnew="";
// }
// console.log(generate);

// create loop for password characters to be randomized 

// for (var i=0; i<=complexity;i++){
//   password=passwordnew + values.charAt(Math.floor(Math.random()* Math.floor(values.length -1)));

// }


// if (true){
//   generateBtn.addEventListener("click", function(){prompt("How long should the password be?")});

  // function passGen(){
  //   var criteriaPrompt = prompt("How long should the password be?");
  // }
    // generateBtn.addEventListener("click",console.log("this worked!"));
  
// if (generateBtn.addEventListener("click")) {
//   var passwordLength = prompt("How long do you want your password to be?");
// }




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