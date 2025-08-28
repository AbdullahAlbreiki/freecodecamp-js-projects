const textArea = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textArea.addEventListener("input", ()=>{
  if(textArea.value.length<=50){
    charCount.textContent = `Character Count: ${textArea.value.length}/50`;
  }else{
    charCount.textContent = `Character Count: ${textArea.value.length}/50 Exceeded max!`;
  }
});