//impementing the chunk algorithm
function chunkArrayInGroups(array, num){
  //make sure num is of size defined in array
  if(num <= 0) return [];
  
  //declare chunk and loop through num amount of array items
  let chunk = []
  for(let i=0; i<array.length; i+=num){
    //push a slice of current iteration item and
    //ones after it based on the number into 
    //chunk array
    chunk.push(array.slice(i, i+num));

  }
  //return the chunk array
  return chunk;
}



let arrayChunks = chunkArrayInGroups([1,2,3,4,5,5,6], 2);
console.log(arrayChunks);


