import React from 'react'
import Presentation from './Presentation'
import MediaContent from './MediaContent'

export default function Home(){
  
  return(
    <section id="home-presentation" className="home-presentation">
      <div className="presentation">
        <Presentation />
        <MediaContent />
      </div>
    </section>
  )
}