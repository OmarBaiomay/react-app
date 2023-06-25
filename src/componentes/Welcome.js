import React, { useState } from "react";

function Welcome(props){

    let [counter, setCounter] = useState(0);

    const add = ()=>{
        setCounter(counter+1)
    }

    return (
        <>
        <h1>Hello {props.name} From Welcome</h1>
            <p>age: {props.age}</p>
            <p>location: {props.location}</p>
            <p>{counter}</p>
            <button onClick={add}>add counter</button>
        </>
    )
}

export default Welcome