
// lunch list array
let lunches = ['apples', 'tea', 'cookies'];

//pushes(adds) the passed argument at the end of the lunch array and logs it
function addLunchToEnd(array, lunchItem){
  array.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`);
  return array;
}

//unshifts(adds) the passed argument to the start of the lunch array and logs it
function addLunchToStart(array, lunchItem){
  array.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return array;
}

//checks if lunch array has at least one lunch before it pops(removes) one from the end of the lunch array
//and logs it
function removeLastLunch(array){
  
  if (array.length > 0){
    let removed = array.pop();
    console.log(`${removed} removed from the end of the lunch menu.`);
    return array;
  }else{
    console.log("No lunches to remove.");
  }
}

//checks if lunch array has at least one lunch before it shifts(removes) one at the start of the lunch array
//and logs it
function removeFirstLunch(array){
  if (array.length > 0){
    let removed = array.shift();
    console.log(`${removed} removed from the start of the lunch menu.`);
    return array;
  }else{
    return console.log("No lunches to remove.");
  }
}

//gets a random index from the lunch array only if the array length is larger than 0 and logs the index value
function getRandomLunch(array){
  
  if (array.length > 0){
    let randomIndex = Math.floor(Math.random()*array.length);
  
    return console.log(`Randomly selected lunch: ${array[randomIndex]}`);
  }else{
    return console.log("No lunches available.");
  }
}

//checks if array length is larger than 0 then logs the lunch array after using join method with
//a comma separator ', '
function showLunchMenu(array){
  if (array.length > 0){
    console.log(`Menu items: ${array.join(', ')}`);
  }else{
    return console.log("The menu is empty.");
  }
}

//call the functions and pass the arguments
addLunchToEnd(lunches,"apple");

getRandomLunch(lunches);
showLunchMenu(lunches);

