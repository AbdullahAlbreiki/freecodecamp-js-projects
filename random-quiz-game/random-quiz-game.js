//array of 5 objects each has propertys of (category, question, choices, answer) with the choices
//having a value of an array
let questions = [
  {
    category:"Dumb Ahh Questions",
    question: "Question 1: Would you let your bihh go through your phone?",
    choices: ["oh Nahh jigsaw your ahh tweakin my boi.", "Yes.", "BOMBACLAART!"],
    answer: "oh Nahh jigsaw your ahh tweakin my boi."
  },
  {
    category:"Dumb Ahh Questions 2",
    question: "Question 1: Would you let your dihh go through your bihh?",
    choices: ["oh hell yeah jigsaw your ahh straight my boi.", "No.", "BOMBACLAART!"],
    answer: "oh hell yeah jigsaw your ahh straight my boi."
  },
  {
    category:"Dumb Ahh Questions 3",
    question: "Question 1: dame un que?",
    choices: ["un grr.", "KYS.", "BOMBACLAART!"],
    answer: "KYS."
  },
  {
    category:"Dumb Ahh Questions 4",
    question: "Question 1: ?",
    choices: ["!", "mb jitt.", "BOMBACLAART!"],
    answer: "mb jitt."
  },
  {
    category:"Dumb Ahh Questions 5",
    question: "Question 1: Hello my baby, hello my darling?",
    choices: ["Hello my part time gyal~", "hi.", "BOMBACLAART!"],
    answer: "Hello my part time gyal~"
  }
];


function getRandomQuestion(questions){
  //declare random, round down the following random value (between 0 and 1) times the length of questions array
  let random = Math.floor(Math.random()*questions.length);
  //return the questions object with the index value of the random variable above
  return questions[random];
}

function getRandomComputerChoice(choices){
  //declare random same as above function but instead of questions array length use choices array length
  let random = Math.floor(Math.random()*choices.length);
  //return choices with index of random
  return choices[random];
}

function getResults(question, computerChoice){
  //check if computerChoice(choice from function above) equals the chosen questions answer
  //log confirmation if true
  //log in correction if false
  if(computerChoice == question.answer){
    return "The computer's choice is correct!";
  }
  else{
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}
//declare variables to hold the computer choice for questions and choices
let question = getRandomQuestion(questions);
let choice = getRandomComputerChoice(question.choices); 

//log the chosen answer and results
console.log(choice);
console.log(getResults(question, choice)); 




