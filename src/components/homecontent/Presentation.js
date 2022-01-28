import React from 'react'
import {NavLink} from 'react-router-dom'
import { digitalMedia } from '../../data/json/DigitalMedia'; 

export default function Presentation(){

  return(
    <div className="information">
      <div className="title"> 
        <h1>Danny Matute</h1>
      </div>
      <div className="presentation-text">
        <p>Desarrollador Frontend con conocimientos en <span>React y Prototipado</span>, especializado en diseño UX con experiencia en diseño web. Me gusta crear diseños creativos, interactivos y funcionales.</p>
      </div>
      <div className="call-action">
        <NavLink 
          to="/work" 
          className="action-link primary">
          <h4>Ver proyectos</h4>
        </NavLink>
        <a 
          href={digitalMedia.cv.href} 
          className="action-link secondary"
          rel="noopener noreferrer" 
          target="_blank">
          <h4>Resumen</h4>
        </a>
      </div>
    </div>
  );
}