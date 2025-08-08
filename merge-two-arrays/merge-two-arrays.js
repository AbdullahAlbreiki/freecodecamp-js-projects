function frankenSplice(arr1,arr2, index){
  //copy arr2 so we dont modify it
  let result = [...arr2];

  //loop through each element backwards and 
  //insert each arr1 element in each iteration
  for(let i = arr1.length - 1; i >= 0; i--)[
    result.splice(index,0,arr1[i])
  ]

  return result;
}

//pass arguments and log it
const test = frankenSplice([1, 2, 3], [4, 5], 1);
console.log(test);