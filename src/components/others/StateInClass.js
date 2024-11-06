import React from "react"

export default class State extends React.Component{
    state = {
        goOut:"Yes"
    }
    toggleGoOut = () =>{
        this.setState(prev => {return {goOut: prev.goOut === "Yes" ? "No" : "Yes"}})
    }
    render(){
        return(            
        <div style={{backgroundColor:"lightgreen", paddingLeft:"20px"}}>
            <h1>Wanna go out?</h1>
            <div style={{display:"flex",margin:"50px",justifyContent:"center",backgroundColor:"black",borderRadius:"50%",width:"100px",height:"100px",color:"white",cursor:"pointer"}}
                onClick={this.toggleGoOut}>
                <h1 style={{alignSelf:"center"}}>{this.state.goOut} </h1>
            </div>
            <h2>{this.state.goOut === "Yes" ? "lets Fucking go" : "There're nothing can take me out"}</h2>
        </div>
        )
    }
}