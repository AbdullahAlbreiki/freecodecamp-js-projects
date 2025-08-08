//all can be shortened to array.find(func)

function findElement(array, func){
  //loops through each array element
  for(let i=0; i<array.length; i++){
    //returns array element that is true in func
    if(func(array[i])){
      return array[i];
    } 
  }
  // if all elements false return undefined
  return undefined;
}

//store test example
const test = findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });

//log it
console.log(test);