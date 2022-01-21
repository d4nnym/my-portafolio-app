import React from 'react'
import { digitalMedia } from '../../data/json/DigitalMedia'; 

export default function Tools(){
  const design = ["adobexd","illustrator"];
  const developer = ["react", "sass","nodejs","mysql"]
  
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
        <h4>Desarrollo: </h4>
        <ul className="tool-list">
          {listDev}
        </ul>
      </div>
      <div className="tools-section">
        <h4>Diseño </h4>
        <ul className="tool-list">
          {listDesign}
        </ul>
      </div>
    </div>
  );
}