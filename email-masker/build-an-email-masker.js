//gets the index of @ to mark the end of the email name and slices up until that index and masking it
function maskEmail(email){
  let atIndex = email.indexOf("@");
  let mask = email.slice(0,1) + "*".repeat(atIndex-2) + email.slice(atIndex - 1);
  return mask;
}
// object with a list of emails
let emails = [
  "apple.pie@example.com",
  "freecodecamp@example.com",
  "info@test.dev",
  "user@domain.org"
];
// single email
let email = "apple.pie@example.com";

//print out the single email masked
console.log(maskEmail(email));

//print out all the emails in the object "emails" masked
for (let i=0; i<emails.length; i++){
  console.log(maskEmail(emails[i]));
}

