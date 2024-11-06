import React from "react"

let ranNum = Math.floor(Math.random()*2)

export default class Header extends React.Component{
    render(){
        return(            
        <div style={{backgroundColor:"lightblue", paddingLeft:"20px"}}>
            <h1>This is <span style={{color:"yellow"}}>{this.props.type}</span> component</h1>
        </div>
        )
    }
}


// export default function Header(props) {
//     return(            
//         <div style={{backgroundColor:"lightblue", paddingLeft:"20px"}}>
//             <h1>This is <span style={{color:"yellow"}}>{props.type}</span> component</h1>
//         </div>
//     )
// };
