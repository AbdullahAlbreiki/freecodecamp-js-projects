//list of fortunes (could be made into an array)
let fortune1 = "Your cat will look very cuddly today.";
let fortune2 = "The weather will be nice tomorrow.";
let fortune3 = "Be cautious of your new neighbors.";
let fortune4 = "You will find a new hobby soon.";
let fortune5 = "It would be wise to avoid the color red today.";

//random number between 1 and 5 (in case of array use fortune.length as max number)
let randomNumber = Math.floor(Math.random() * 5 +1);

//declared selectedFortune as the container for the winning fortune
let selectedFortune;

//if else statement to check for random number (can be easily changed to a switch statement)
if (randomNumber == 1){
  selectedFortune = fortune1;
} else if (randomNumber == 2){
  selectedFortune = fortune2;
} else if (randomNumber == 3){
  selectedFortune = fortune3;
} else if (randomNumber == 4){
  selectedFortune = fortune4;
} else if (randomNumber == 5){
  selectedFortune = fortune5;
} else {
  randomNumber = "Error! try again please.";
}

// log results
console.log("Here is your fortune \n");
console.log(selectedFortune);
console.log("~GenieBot")

