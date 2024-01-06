import { useState } from "react";

export default function Usestat(){


    var[val,fun] = useState("Default Value");

    function handle(){
    var value=document.getElementById("hi").value;
    console.log("andar hea");

    fun(value);
}

    return(
        <>
        <input type="text" placeholder="Enter Name" id="hi"></input>
        <input type="submit" value="Submit" onClick={handle}></input>
        <h1>{val}</h1>
        </>
    )
}