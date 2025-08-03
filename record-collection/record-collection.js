//object of id's of different objects
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


function updateRecords(records, id, prop, value){
  
  //checks if property value is empty it deletes the value property
  if (value === ''){
    delete records[id][prop];
  }
  //checks if property is not tracks and is not empty assigns value to property
  else if(prop !== "tracks" && value !== ''){
    records[id][prop] = value;
  }
  //checks if property is tracks and value is not empty
  else if(prop == "tracks" && value !== ''){
    //checks if the record id object has property of tracks
    //if true creates property named tracks with empty array value
    if(!records[id].hasOwnProperty("tracks")){
      records[id].tracks = [];
    }
    //pushes(adds)value to the end of the tracks array
    records[id].tracks.push(value);
  }
  //returns full records object
  return records;
}

//logs the functions return after passing the arguments (record object, record id, property, value)
console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));


