import React from 'react'
import Websites from './Websites'
import {digitalMedia} from '../../service/DigitalMedia'

export default function MediaContent(){
  return (
    <div className="media-content">
      <div className="img-profile">
        <img src={digitalMedia.profile.src} title={digitalMedia.profile.title} alt={digitalMedia.profile.alt}/>
      </div>
      <Websites />
    </div>
  )
}