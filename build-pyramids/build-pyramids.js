function pyramid(pattern,rows,downward){
  //set max width of pyramid and result to log
  let result = "";
  const maxWidth = 2*rows-1;
  
  if(!downward){ //normal pyramid
    for(let i=1; i<=rows; i++){
      //set number of characters in this iteration
      const numChars= 2*i-1; 
      //how many spaces before the characters 
      //in this iteration
      const numSpaces= (maxWidth-numChars)/2;
      const spaces = ' '.repeat(numSpaces);
      const patterns = pattern.repeat(numChars);
      //store this iterations(row) value in result
      result+= spaces + patterns + '\n';
    }
  }
  else{//flipped pyramid
  
    //same as above but flip 
    //loop condition and decrement
    for(let i=rows; i>=1; i--){
      const numChars= 2*i-1;
      const numSpaces= (maxWidth-numChars)/2;
      const spaces = ' '.repeat(numSpaces);
      const patterns = pattern.repeat(numChars);
      result+= spaces + patterns + '\n';
    }
  }
  
  return result; //return result
}

//call function pass arguments and log it
let test = pyramid("*", 5, false);
console.log(test);

