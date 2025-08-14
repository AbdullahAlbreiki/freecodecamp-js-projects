function generatePassword(passLen){
  //declare password, allowed characters, allowed characters length
  let password = "";
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  const charLength = chars.length;

  for(let i=0; i<passLen; i++){
    //get random number between 0 and character length
    const randomIndex = Math.floor(Math.random() * charLength);
    
    //every iteration add another character from chars at a random index
    password += chars.charAt(randomIndex);
  }


  return password;
}

//create variable to hold the password functions return and log it
let password = generatePassword(5);
console.log(`Generated password: ${password}`);