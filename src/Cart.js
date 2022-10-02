import { useState, useEffect } from "react";
import React from "react";
import RemoteData from "./RemoteData";


function Cart(props) {
       
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
    

        <RemoteData/>
      </div>
    );
  }
  
  
export default Cart

