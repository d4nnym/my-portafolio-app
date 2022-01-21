import React, {Component} from 'react'
import {Outlet} from 'react-router-dom';
import HomeContent from '../components/homecontent/HomeContent'

export default class HomePage extends Component {
  render(){
    return(
      <main className="main">
        <HomeContent />
        <Outlet />         
      </main>
    );
  }
}
