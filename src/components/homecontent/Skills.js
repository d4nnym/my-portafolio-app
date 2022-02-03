import React from 'react'
import { digitalMedia } from '../../data/json/DigitalMedia'

export default function Skills({content,media}){
    //const media = digitalMedia[skills.react.media];
    //const content = skills.react.content
    return(
        <div className="skill-card">
            <div className="card-media">
              <div className="tool-media">
                <img
                  src={digitalMedia[media].src}
                  title={digitalMedia[media].title}
                  alt={digitalMedia[media].alt} 
                />
              </div>
            </div>
            <div className="card-information">
              <p dangerouslySetInnerHTML={{__html: content}} />
            </div>
          </div>
    );
}