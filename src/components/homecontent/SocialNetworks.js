import React from 'react'
import {media} from '../MediaExports'

export default function SocialNetworks (){

  const socialNetworks = ["linkedin","twitter","gmail","github","codepen"];

  const listSocialNet = socialNetworks.map((social)=>
    <li key={social} className="social">
      <a 
        href={media[social].href} 
        className="" 
        rel="noopener noreferrer" 
        target="_blank">
        <img 
          src={media[social].src} 
          title={media[social].title} 
          alt={media[social].alt} 
        />
      </a>
    </li> 
  );

  return(
    <ul className="list-social">
      {listSocialNet}
    </ul>
    
  );
}