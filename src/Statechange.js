import { useState } from "react";

export default function Statechange()
{

    var[a,iet]=useState("Default")
    function handle(){
        var value=document.getElementById("indigo").value;
        console.log("hii aaya")
        iet(value);
            

    }

    return(
        <>
        <input type="text" placeholder="Enter the name" id="indigo"></input>
        <input></input>
        <input type="submit" value="submit" onClick={handle}></input>
        <h1>{a}</h1>
     </>  
    )
}