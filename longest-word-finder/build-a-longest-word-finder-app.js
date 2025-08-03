
function findLongestWordLength(sentence){
//removes spaces from the beginning and end of the sentence
  if (sentence.trim() == ''){
    return 0;
  }
//splits the sentence into an array and removes punctuations
  const words = sentence.split(/\s+/).map(word=>word.replace(/[^a-zA-Z]/g, ''));
  

  let maxLength=0;
  let longestWord;
//if the word in this loop iteration bigger than the last maxLength then set the maxLength to this words length
  for(let word of words){
    if(word.length > maxLength){
      maxLength = word.length
      longestWord = word;
      
    }
  }
//return the longest word and its size
  return `Largest word is ${longestWord}, it is ${maxLength} letters long!`
}
//
const longest = findLongestWordLength("Hello my baby~ hello my honey~ hello my bright time gal~");

console.log(longest);


