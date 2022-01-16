import React from 'react'
import { digitalMedia } from '../../service/DigitalMedia'; 

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
        <a 
          href="/work" className="action-link primary">
          <h4>Ver proyectos</h4>
        </a>
        <a 
          href={digitalMedia.cv.href} 
          className="action-link secondary"
          rel="noopener noreferrer" 
          target="_blank">
          <h4>Ver mi CV</h4>
        </a>
      </div>
    </div>
  );
}