import React, {useState,useEffect} from 'react'
import WorkCard from './WorkCard'
import CardControl from './CardControl'
import {works} from '../../service/WorkExports'
import {mediaQueries} from '../../service/MediaQueries'

export default function WorksHome(){
  
  const [width,setWidth] = useState(window.innerWidth)
  const [translate,setTranslate] = useState(0)
  const [iterator,setIterator] = useState(0)
  const [size,setSize] = useState(0)

  const translateStyle = { 
    transform: "translate("+translate+"px)"
  } 
  
  useEffect(()=>{
    handleResize()
    window.addEventListener("resize", handleResize)
  })

  const next = (()=>{
    setTranslate(translate-(256*iterator));
    setSize(size+iterator);
  });

  const back = (()=>{
    setTranslate(translate+(256*iterator))
    setSize(size-iterator)
  });
 
  const handleResize = (()=>{
    setWidth(window.innerWidth);
    if(width>mediaQueries.large.width){
      setIterator(mediaQueries.large.size)
    }else if(width<mediaQueries.large.width&&width>mediaQueries.small.width){
      setIterator(mediaQueries.small.size)
    }else if(width<mediaQueries.small.width&&width>mediaQueries.tablet.width){
      setIterator(mediaQueries.tablet.size)
    }else if(width<mediaQueries.tablet.width&&width>mediaQueries.mobile.width){
      setIterator(mediaQueries.mobile.size)
    }else{
      setIterator(mediaQueries.mobile.size)
    }      
  });

  const worksList = works.map((project)=>
    <li key={project.id} className="work-card">
      <WorkCard project={project} />     
    </li>
  );

  return(
    <section className="work-home" id="work-home">
      <div className="title">
        <h3>Mis Proyectos</h3>
      </div>
      <div className="card-container">
        <div className="overflow-cards">
          <ul className="works-card" style={translateStyle}>
            {worksList}
          </ul>
        </div>
        <CardControl 
          direction="back" 
          visibility={size!==0?false:true} 
          move={back}/>
        <CardControl 
          direction="next" 
          visibility={size>=(works.length-iterator)?true:false} 
          move={next} />
      </div>
    </section>
  );
}