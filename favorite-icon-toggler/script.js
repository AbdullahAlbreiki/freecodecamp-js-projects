//set favIcon as all elements with favorite-icon class
const favIcon = document.querySelectorAll(".favorite-icon");

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


