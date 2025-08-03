
function mutation(array){
  //sets first & second array element to lowercase
  let firstStr = array[0].toLowerCase();
  let secondStr = array[1].toLowerCase();
  //loop for each character in arrays second string
  for(let char of secondStr){
    //if character in this iteration isnt in 
    //first string, return false
    if(!firstStr.includes(char)){
      return false;
    }
  }
  //else return true
  return true;
}

//log and pass arguments for the array
console.log(mutation(["aliens", "Lines"]));
console.log(mutation(["Hello", "hey"]));



