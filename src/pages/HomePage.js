import React, {Component} from 'react'
import {Outlet} from 'react-router-dom';
import Header from '../components/header/Header'
import HomeContent from '../components/homecontent/HomeContent'
// import Work from '../components/content/Work'

export default class HomePage extends Component {
  render(){
    return(
      <div className="container-body light-theme">
        <Header theme="header-light" section="home" />
        <main className="main">
          <HomeContent />
          <Outlet />          
        </main>
      </div>
    );
  }
}
