let inventory = [

]



function findProductIndex(pName){
  //set argument to lowercase
  const lowerCaseName = pName.toLowerCase();

  //find index
  for(let i=0; i<inventory.length; i++){
    if(inventory[i].name == lowerCaseName){
      return i;
    }
  }
  //return -1 if object not found
  return -1;
  
}

function addProduct(objectP){
  //store name in lowercase
  objectP.name = objectP.name.toLowerCase();
  //get object index
  const index = findProductIndex(objectP.name);

  //if object exists add quantity amount and log
  if(index>=0){
    inventory[index].quantity += objectP.quantity;
    console.log(`${objectP.name} quantity updated`);
    return;
  }
  else{ //if not push object to array as is and log
    inventory.push(objectP);
    console.log(`${objectP.name} added to inventory`);
    return;
  }
}


function removeProduct(nameP, quantityP){
  const index = findProductIndex(nameP);//get index

  //check if object exists
  if(index === -1){
    console.log(`${nameP.toLowerCase()} not found`);
    return;
  }

  const product = inventory[index]; //set object as product

  //if product.quantity > quantityP, increment product.quantity by quantityP
  if(product.quantity > quantityP){
    product.quantity -= quantityP;
    console.log(`Remaining ${product.name} pieces: ${product.quantity}`);
    return;
  }//if product.quantity = quantityP are the same value remove product object
  else if(product.quantity === quantityP){ 
    console.log(`Removed ${product.name}`);
    inventory.splice(index, 1);
    return;
  }
  else{ //check if quantityP is larger than product.quantity then log it
    console.log(`Not enough ${product.name} available, remaining pieces: ${product.quantity}`);
    return;
  }

}

