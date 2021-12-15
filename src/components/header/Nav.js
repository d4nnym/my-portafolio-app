import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Nav({isOpen,handleMenu}){

    return(
      <div className={!isOpen?"menu":"menu show"}>
        <ul className="nav">
          <li className="nav-item">
            <NavLink onClick={isOpen?handleMenu:null} to="/">Inicio</NavLink>
          </li> 
          <li className="nav-item">
            <NavLink onClick={isOpen?handleMenu:null} to="/about-me">Sobre mi</NavLink>
          </li> 
          <li className="nav-item">
            <NavLink onClick={isOpen?handleMenu:null} to="/work">Mi Trabajo</NavLink>
          </li> 
        </ul>
      </div>
    );
}

//onMouseLeave={isOpen?handleMenu:null}