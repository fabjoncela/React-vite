import React, { useState } from 'react';
//we can now make stateful variable and Setter funct, to update the var

function MyComponent() {
    // useState funct returns an [] with 2 elem: var and a setter funct

    // using array destructure to destructure these 2 elements
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);

    const updateName = () => {
    setName("Patrick");
    }
    
    const updateAge = () => {
    setAge(12);
    }
    

    return (<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>set name</button>
        <p>Age: {age}</p>
        <button onClick={updateAge}>set Age</button>
    </div>)
}
export default MyComponent