import React, {useState} from 'react';


function ColorPicker(){

    const [color, setColor] = useState('#FFFFFF')

    function handleColorChange(e){
        setColor(e.target.value)
    }


    return(<>
    <div className='color-picker-container'>
        <h1>Color Picker</h1>
    <div className='color-display' style={{backgroundColor: color}}>
        <p>Selected color: {color}</p>
        </div>
        <div className='color-selector'>
        <label htmlFor="">Select a Color:</label>
        <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    </div>
    </>)
}
export default ColorPicker