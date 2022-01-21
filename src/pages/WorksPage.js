import React from 'react'
import {digitalMedia} from '../data/json/DigitalMedia'
//import Projects from '../components/projects/Projects' 
export default function WorksPage(){
  return(
    <main className="main">  
      <div><h1 style={{color:"#708ec0"}}>Contenido en construcción <span role="img" aria-label="hammer">🔨</span></h1></div>
      <div><h2 style={{color:"#5f667a",marginBottom:"32px"}}>Muy pronto se actulizarán los contenidos. <span role="img" aria-label="partying-face">🥳</span></h2></div>
      <img
        className="construction" 
        src={digitalMedia.construction3.src} 
        title={digitalMedia.construction3.title} 
        alt={digitalMedia.construction3.alt} 
      />
    </main>
  )
} 