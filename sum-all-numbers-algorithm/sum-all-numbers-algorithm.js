function sumAll(arr){
  let n = Math.min(...arr);
  let m = Math.max(...arr);
  let sum=0;

  for(let i=n; i<=m; i++){
    sum += i;
  }

  return sum;
  
}


const sum = sumAll([1,4]);
console.log(sum);