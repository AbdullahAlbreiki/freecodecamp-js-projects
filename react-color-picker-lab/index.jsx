const { useState } = React;

export const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");
  return(
    <div id="color-picker-container" style={{backgroundColor: color}}>
      <p>Pick a background color!!</p>
      <input type="color" onChange={(e)=>setColor(e.target.value)} id="color-input" value={color}/>
    </div>
  );
};