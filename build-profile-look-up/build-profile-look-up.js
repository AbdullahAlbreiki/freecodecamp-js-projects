let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, property){
  //find contact from contacts that has the passed name
  const contact = contacts.find(contact => contact.firstName == name);

//error handling in case the name or property
//passed in function argument is not defined
  if (!contact) return "No such contact";

  if (!contact.hasOwnProperty(property)) return "No such property"

//return the property
  return contact[property];
}


console.log(lookUpProfile("Akira", "lastName"));