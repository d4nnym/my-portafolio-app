import React from 'react'
import {NavLink} from 'react-router-dom' 
import {digitalMedia} from '../../data/json/DigitalMedia'

export default function WorkFooter({toolMedia,hrefProject}){
  
  const mediaList = toolMedia.map((tool)=>
    <img key={digitalMedia[tool].alt}
      src={digitalMedia[tool].src} 
      title={digitalMedia[tool].title} 
      alt={digitalMedia[tool].alt}
    /> 
  );

  return (
    <div className="work-footer">
      <NavLink 
        className="work-link" 
        to={hrefProject}>
        <h5>Ver más</h5>
      </NavLink>
      <div className="tool-media">
        {mediaList}
      </div>
    </div>
  );
}