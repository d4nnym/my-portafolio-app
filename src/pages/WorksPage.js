import React, {Component} from 'react'
import Header from '../components/header/Header'

export default class WorksPage extends Component{
  render(){
    return(
      <div className="container-body light-theme">
        <Header theme="header-light" section="home" />  
        Aquí va toda la chamba que he realizado
      </div>
    )
  }
}