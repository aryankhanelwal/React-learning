import React from 'react'
import { Routes , Route} from 'react-router-dom'
import { Home } from '../Home'
import Navbar from '../Navbar'
import Menu from '../Menu'
import Cart from '../Cart'
import Prop2 from '../Props2'
import Todo from '../Todo'
// import Login from '../Login'
function Routing(){

    const [color,setColor] = React.useState('')

    return(
        <>
        <Navbar title="Foodish"/>
        <input placeholder='Enter your color' value={color} onChange={(e)=>{setColor(e.target.value)}} ></input>
        <Routes>
        {/*for universal Route*/}
        <Route path='/' element={<Home/>}/>
{/*Nested Routing*/}
        <Route path='/First/Prop' element={<Prop2/>}/>
         
           <Route path='/First' element={<Home/>}/>
    <Route path='/Menu' element={<Menu color = {color}/>}/>
    <Route path='/Cart' element={<Cart/>}/>
     
     {/* for invalid route */}
        <Route path='*' element={<Home/>}/>
        <Route path='/Todo' element={<Todo/>}/>
        {/* <Route path='/Login' element={<Login/>}/> */}


        </Routes>
        
        </>
    )

}

export default Routing