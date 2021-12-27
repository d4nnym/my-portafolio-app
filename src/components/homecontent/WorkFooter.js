import React from 'react' 
import {digitalMedia} from '../../service/DigitalMedia'

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
      <a className="work-link" href={hrefProject}>
        <h5>Ver más</h5>
      </a>
      <div className="tool-media">
        {mediaList}
      </div>
    </div>
  );
}