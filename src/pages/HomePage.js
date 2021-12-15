import React, {Component} from 'react'
import {Outlet} from 'react-router-dom';
import Header from '../components/header/Header'
import Content from '../components/content/Content'
import Work from '../components/content/Work'


export default class Home extends Component {
  render(){
    return(
      <div className="container-body dark-theme">
        <Header theme="header-dark" section="home" />
        <main className="">
          <section className="">
            <Content />
          </section>
          <section className="">
            <Outlet />
          </section>
          <section className="">
            <Work />
          </section>
        </main>
      </div>
    );
  }
}
