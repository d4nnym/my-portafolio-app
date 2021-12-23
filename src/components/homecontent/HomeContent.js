import React from 'react'
import Presentation from './Presentation'
import MediaContent from './MediaContent'

export default function Home(){
  
  return(
    <section id="content" className="">
      <div className="presentation">
        <Presentation />
        <MediaContent />
      </div>
    </section>
  )
}