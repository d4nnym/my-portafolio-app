import React,{Component} from 'react'
import Tools from './Tools'

export default class AboutMe extends Component{
  render(){
    return(
      <section className="about-me" id="about-me">
        <div className="title">
          <h3>Sobre mí</h3>
        </div>
        <div className="container-summary">
          <div className="summary">
            <p>Tego dos años de experiencia en diseño web, patrones de diseño y buenas prácticas de programación. También tengo una especialización en <span>Diseñador en experiencia de usuario</span> con habilidades como diseño de Wireframe, Bocetos, Mackups, diseño de interacciones, diseño responsivo y prototipado.</p>
            <br />
            <p>Soy estudiante por egresar de la carrera de <span>Ingeniría de Sistemas</span>. En el transcurso de mi formación trabajé con otras tecnologías tales como Java, framework Spring, base de datos con SQL y Python. Sin embargo, actualmente trabajo mucho con la librería de React y Javascript vanilla.</p>
          </div>
          <div className="tools">
            <Tools />
          </div>
        </div>
      </section>
    )
  }
}