import React from "react"

class Welcome extends React.Component{
    render(){
        return(
            <div style={{backgroundColor:"lightgray", paddingLeft:"20px"}}>
                <h1>Welcome home <span style={{color:"red"}}>{this.props.roll}</span> pass props in class component</h1>
            </div>
        )
    }
}

export default Welcome