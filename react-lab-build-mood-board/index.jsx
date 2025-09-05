
export function MoodBoardItem({ color, image, description }){
  const itemStyle = {
    backgroundColor: color,

  }

  return (
    <div className="mood-board-item" style={itemStyle}>
      <img className="mood-board-image" src={image}/>
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
}

export function MoodBoard(){
  return(
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      <div className="mood-board">
        <MoodBoardItem
          color="green"
          image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg"
          description="Carribean"
        />
        <MoodBoardItem
          color="dimgrey"
          image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg"
          description="Gawadar Beach"
        />
        <MoodBoardItem
          color="steelblue"
          image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"
          description="CapeTown"
        />
      </div>
    </div>
  );
}