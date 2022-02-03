import React from 'react'
import {skills} from '../../data/json/skills'
import Skills from './Skills'


export default function AboutMe(){
  
  const skillsList = skills.map((skill)=>
    <div className="skill" key={skill.title}><Skills content={skill.content} media={skill.media} /></div>
  );
  
  return(
    <section className="about-me" id="about-me">
      <div className="container-summary">
        <div className="title">
          <h3 className="center-text">¡Un placer tenerte aquí! Conoce un poco más sobre mí</h3>
        </div>
        <div className="skills-card">
          {skillsList}
        </div>
        <div className="title">
          <h3>Soy estudiante por egresar de la carrera de <span>Ingeniera en Sistema.</span>  En el transcurso de mi formación trabajé con otras tecnologías tales como Java, framework Spring, base de datos con SQL y Python. Sin embargo, me identifico por el diseño web con React. </h3>
          <br />
          <h3>Actualmente trabajo con proyecto personales y sigo fortaleciendo mis conocimientos con nuevas experiencias, nuevas herramientas y nuevos retos.</h3>
        </div>
      </div>
    </section>
  )
}