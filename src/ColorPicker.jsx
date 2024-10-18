import React, { useState } from 'react';


function ColorPicker() {

    const [color, setColor] = useState('#000000')

    function handleColorChange(e) {
        setColor(e.target.value)
    }
    return (<>
        <div className='color-picker-container'>
            <h1>Color Picker</h1>
            <div className='color-display' >
                <p>Selected color: <span style={{ color: color }}>{color}</span></p>
            </div>
            <div className='color-box' style={{ backgroundColor: color }}></div>
            <div className='color-selector'>
                <label htmlFor="colorInput">Select a Color:</label>
                <input
                    id="colorInput"
                    type="color"
                    value={color}
                    onChange={handleColorChange}
                />
            </div>
        </div>
    </>)
}
export default ColorPicker