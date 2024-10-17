import React, { useState } from 'react';
//we can now make stateful variable and Setter funct, to update the var

function MyComponent() {
    // useState funct returns an [] with 2 elem: var and a setter funct

    // using array destructure to destructure these 2 elements
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);


    const updateName = () => {
        setName("Patrick");
    }
    const updateAge = () => {
        setAge(12);
    }
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }



    return (<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>set name</button>

        <p>Age: {age}</p>
        <button onClick={updateAge}>set Age</button>

        <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>)
}
export default MyComponent