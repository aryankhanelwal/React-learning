import { useState } from "react";
import React from "react";



function Count(props) {
       
    const[count,setCount ]= useState(0)
    // const inc = ()=>{
    //     setCount(count+1)
    //     console.log({count})

    // } 
    // const dec = ()=>{
    //     setCount(count-1)
    //     console.log({count})

    // } 

    return (
      <div>
        <h1>the value of count is:{count}</h1>
        <button onClick={()=> setCount(count+1)}> Inc  </button>
        <button onClick={()=> setCount(count-1)}>dec</button>
    
      </div>
    );
  }
  
  
export default Count

