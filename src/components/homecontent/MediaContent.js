import React from 'react'
import SocialNetworks from './SocialNetworks'
import {media} from '../MediaExports'

export default function MediaContent(){
  return (
    <div className="media-content">
      <div className="img-profile">
        <img src={media.profile.src} title={media.profile.title} alt={media.profile.alt}/>
      </div>
      <SocialNetworks />
    </div>
  )
}