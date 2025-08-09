function getAverage(scores){
  
  if(scores.length == 0) return 0;
  let sum = 0;
  //iterates over every array item and sums them
  for(let num of scores){
    sum += num;
  }
  //return the average of array items
  return sum/scores.length;
}

function getGrade(score){
  //return grade based on score average
  if(score == 100){
    return "A+";
  }
  else if(score >=90){
    return "A";
  }
  else if(score >=80){
    return "B";
  }
  else if(score >=70){
    return "C";
  }
  else if(score >=60){
    return "D";
  }
  else if(score <=59){
    return "F";
  }
}

function hasPassingGrade(score){
  //in case grade is F return false for hasPassingGrade
  let grade = getGrade(score);
  return grade !== "F";
  
}


function studentMsg(scores, studScore){
  //store returns of other functions and build a message
  let average = getAverage(scores);
  let grade = getGrade(studScore);
  let passed = hasPassingGrade(studScore);

  //if hasPassingGrade is true return passing message
  return `Class average: ${average}. Your grade: ${grade}. You ${passed ? 'passed' : 'failed'} the course.`;
  
}

//call function and pass arguments then log it
let message = studentMsg([80,90,90,50,60], 80);
console.log(message);