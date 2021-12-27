import React from 'react'
import {digitalMedia} from '../../service/DigitalMedia'

export default function Websites (){

  const websites = ["linkedin","twitter","gmail","github","codepen"];

  const websitesList = websites.map((_website)=>
    <li key={_website} className="website">
      <a 
        href={digitalMedia[_website].href} 
        className="" 
        rel="noopener noreferrer" 
        target="_blank">
        <img 
          src={digitalMedia[_website].src} 
          title={digitalMedia[_website].title} 
          alt={digitalMedia[_website].alt} 
        />
      </a>
    </li> 
  );

  return(
    <ul className="website-list">
      {websitesList}
    </ul>
    
  );
}