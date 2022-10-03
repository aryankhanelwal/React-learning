import React, { useState } from "react";

import {useNavigate} from 'react-router-dom';
import './Navbar.css';


function Navbar(props) {

  const Navigate = useNavigate()
  const [mode, setMode] = useState('light')


  const changeMode = () => {

    if (mode === 'light') {
      setMode('dark')
    }
    else {
      setMode('light')
    }
  }





  return (
    <nav className={`navbar navbar-expand-lg bg-${mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: mode === 'light' ? 'black' : "white" }}>{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" id="firstone" style={{  cursor:'pointer'}} aria-current="page" onClick={() => Navigate('/First')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{  cursor:'pointer'}} onClick={() => Navigate('/Menu')}>Menu</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{  cursor:'pointer'}} onClick={() => Navigate('/Login')}>Login</a>
            </li>
            <li className="nav-item">
              <a style={{  cursor:'pointer'}} className="nav-link"onClick={()=>Navigate('/Cart')} role="button" >
                Cart
              </a>

            </li>
            <li className="nav-item">
              <a style={{  cursor:'pointer'}} className="nav-link"onClick={()=>Navigate('/Todo')} role="button" >
                Todo
              </a>

            </li>
            <li className="nav-item">
              <button className="btn btn-outline-success" onClick={changeMode}>{mode === 'light' ? 'Dark' : 'Light'}</button>

            </li>
          </ul>

        </div>
      </div>
    </nav>
  )

}

export default Navbar;