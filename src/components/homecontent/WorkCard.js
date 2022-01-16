import React from 'react'
import WorkFooter from './WorkFooter'

export default function WorkCard({project}){
  
  return (
    <div className="work-body vertical-card">
      <div className="work-information">
        <p>{project.content}</p>
      </div>
      <div className="footer">
        <div className="work-header">
          <h4>{project.title}<small> | {project.type}</small></h4>
          <h5>{project.subtitle}</h5>
        </div>
        <WorkFooter toolMedia={project.media} hrefProject={project.href}/>
      </div> 
    </div>
  );
}