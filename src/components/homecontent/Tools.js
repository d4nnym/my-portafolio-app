import React from 'react'
import { digitalMedia } from '../../service/DigitalMedia'; 

export default function Tools(){
  const design = ["adobexd","illustrator"];
  const developer = ["react", "sass","angular", "electron","illustrator"]
  
  const listDev = developer.map((dev)=>
    <li key={dev} className="tool-item">
      <img 
      src={digitalMedia[dev].src} 
      title={digitalMedia[dev].title} 
      alt={digitalMedia[dev].alt} />
      <p>{digitalMedia[dev].title}</p>
    </li>
  );

  const listDesign = design.map((des)=>
    <li key={des} className="tool-item">
      <img 
      src={digitalMedia[des].src} 
      title={digitalMedia[des].title} 
      alt={digitalMedia[des].alt} />
      <p>{digitalMedia[des].title}</p>
    </li>
  );

  return(
    <div className="tools-media">
      <div className="tools-section"> 
        <h4>Herramientas de desarrollo: </h4>
        <ul className="tool-list">
          {listDev}
        </ul>
      </div>
      <div className="tools-section">
        <h4>Herramientas de diseño: </h4>
        <ul className="tool-list">
          {listDesign}
        </ul>
      </div>
    </div>
  );
}