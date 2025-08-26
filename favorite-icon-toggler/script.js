//get elements from DOM
const favIcon = document.querySelectorAll(".favorite-icon");
const inputContainer = document.querySelector(".input");
const addItem = document.querySelector(".add-item");
const list = document.querySelector(".item-list");
const input = document.getElementById("input-field");
const submit = document.querySelector(".submit");

inputContainer.classList.add("hidden");

//for each button add an event listener
favIcon.forEach(icon =>{
  icon.addEventListener("click", function(){
    //toggle the class filled for each clicked button
    this.classList.toggle("filled");

    //toggle between the filled heart and normal heart icons using innerHTML
    if(this.classList.contains("filled")){
      this.innerHTML = "&#10084;";
    }else{
      this.innerHTML = "&#9825;";
    }
  });
});

//toggle visibility for both + button and input div
addItem.addEventListener("click", function(){
  addItem.classList.toggle("hidden");
  inputContainer.classList.toggle("hidden");

});

//add event listener to submit button
submit.addEventListener("click", function(){
  const itemText = input.value.trim();

  if(itemText){
    //create new list item with favorite button
    const newItem = document.createElement('li');
    newItem.innerHTML = `${itemText} <button class="favorite-icon">&#9825;</button>`;

    //add to list
    list.appendChild(newItem);
    


    //add event listener to teh new favorite button
    const newFavIcon = newItem.querySelector(".favorite-icon");
    newFavIcon.addEventListener("click", function(){
      this.classList.toggle("filled");
      if(this.classList.contains("filled")){
        this.innerHTML = "&#10084;";
      }else{
        this.innerHTML = "&#9825;";
      }
    });

    //hide text field and reveal + button
    addItem.classList.toggle("hidden");
    inputContainer.classList.toggle("hidden");
    input.value = "";
  }

});
