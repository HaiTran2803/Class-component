import React from "react"
import './Greet.css'
let ranNum = Math.floor(Math.random()*2)

const Greet = (props) => 
    (
        <div style={{backgroundColor:"lightpink", paddingLeft:"20px"}}>
            <h1>Greeting <span style={{color:"aqua"}}>{props.name}</span> in function </h1>
             <h1>Dice game: {ranNum} {ranNum ? "Oke" : "not Oke"} </h1>
             <button className="button-dice" onClick={() => location.reload()}>Coin</button>
        </div>
    )

export default Greet