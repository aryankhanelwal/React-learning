import React from 'react'
import { Routes , Route} from 'react-router-dom'
import { Home } from '../Home'
import Navbar from '../Navbar'
import Menu from '../Menu'
import Cart from '../Cart'
import Prop2 from '../Props2'
import Todo from '../Todo'
function Routing(){


    return(
        <>
        <Navbar title="Foodish"/>
        <Routes>
        {/*for universal Route*/}
        <Route path='/' element={<Home/>}/>
{/*Nested Routing*/}
        <Route path='/First/Prop' element={<Prop2/>}/>
         
           <Route path='/First' element={<Home/>}/>
    <Route path='/Menu' element={<Menu/>}/>
    <Route path='/Cart' element={<Cart/>}/>
     
     {/* for invalid route */}
        <Route path='*' element={<Home/>}/>
        <Route path='/Todo' element={<Todo/>}/>

        </Routes>
        
        </>
    )

}

export default Routing