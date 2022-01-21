import React, {useState,useEffect} from 'react'
import WorkCard from './WorkCard'
import CardControl from './CardControl'
import {works} from '../../data/json/WorkExports'
import {mediaQueries} from '../../data/json/MediaQueries'

export default function WorksHome(){
  
  const calcIterator = ((e)=>{
    if(e>mediaQueries.large.width){
      return(mediaQueries.large.size)
    }else if(e<mediaQueries.large.width&&e>=mediaQueries.small.width){
      return(mediaQueries.small.size)
    }else if(e<mediaQueries.small.width&&e>=mediaQueries.tablet.width){
      return(mediaQueries.tablet.size)
    }else if(e<mediaQueries.tablet.width&&e>=mediaQueries.mobile.width){
      return(mediaQueries.mobile.size)
    }else{
      return(mediaQueries.mobile.size)
    }
  })

  const [translate,setTranslate] = useState(0)
  const [iterator,setIterator] = useState(calcIterator(window.innerWidth))
  const [size,setSize] = useState(0)

  const translateStyle = { 
    transform: "translate("+translate+"px)"
  } 
  
  const next = (()=>{
    setTranslate(translate-(256*iterator));
    setSize(size+iterator);
  });

  const back = (()=>{
    setTranslate(translate+(256*iterator))
    setSize(size-iterator)
  });
 
  const handleResize = (()=>{
    setIterator(calcIterator(window.innerWidth));      
  });

  useEffect(()=>{
    window.addEventListener("resize", handleResize);
  });

  const worksList = works.map((project)=>
    <li key={project.id} className="work-card">
      <WorkCard project={project} />     
    </li>
  );

  return(
    <section className="work-home" id="work-home">
      <div className="title">
        <h3>Actividades</h3>
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