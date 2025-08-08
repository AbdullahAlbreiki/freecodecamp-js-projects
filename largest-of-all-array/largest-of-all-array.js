function largestOfAll(array){
  let largestArray = array.map(subArray=>Math.max(...subArray));

  return largestArray;  
}

let arrayOfArrays = largestOfAll([[1,2,3],[1,2,3],[4,5,6]]);
console.log(arrayOfArrays);