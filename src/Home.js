import React from "react";
import Routing from './Routing/Routes';
import {useNavigate} from 'react-router-dom';





function Home(){
    const Navigate = useNavigate()
    return (
        <>
        <h1>This is Home Comp.</h1>
        <a onClick={()=>Navigate('/First/Prop')}>this is a link to google</a>
        </>
    )
}


function About(){
    return (<h1>This is about Comp.</h1>)
}




export  {Home, About}
