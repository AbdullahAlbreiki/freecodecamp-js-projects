let num = 5;

function factorialCalculator(num){
  let result = 1;
  //loop through each number from 1 until num 
  //and multiply it by the value of result in 
  //each iteration
  for(let i=1; i<=num; i++){
    result *= i;
  }
  return result;
}
//call the function and write a result message then log them
let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);

