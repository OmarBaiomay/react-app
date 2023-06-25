import { useState } from "react"

function Input(props){
    
    const [inputValue, setValue] = useState()
    
    return(
        <>
        <div className="container">
            <label>{props.label}</label>
            <input type={props.type} onChange={(e)=>{
                setValue(e.target.value)
            }}></input>

            <p>Input value: {inputValue}</p>
        </div>
        </>
    )
}

export default Input