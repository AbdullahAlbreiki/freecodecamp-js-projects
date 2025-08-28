const textArea = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textArea.addEventListener("input", ()=>{
  if(textArea.value.length<50){
    charCount.textContent = `Character Count: ${textArea.value.length}/50`;
    charCount.style.color="";
  }else{
    textArea.value = textArea.value.substring(0, 50);
    charCount.textContent = "Character Count: 50/50";
    charCount.style.color="red";
  }
});
