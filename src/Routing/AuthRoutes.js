import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../Login'
function Routing() {


    return (
        <>


            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />


                <Route path='*' element={<Login/>} />

            </Routes>

        </>
    )

}

export default Routing