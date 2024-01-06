import React from "react";
import react from "react";
export default class Greeting1 extends React.Component
{
    render(){
        return(
            <>
            <h1>
                Hello this is react
            </h1>
            <h1>
                <hr></hr>
                    this is the Class Component {this.props.msg }
            </h1>
            <br></br>
            <h2>CDAC IET IS GOOD {this.props.msg}</h2>
            </>
        )
    
    }
}