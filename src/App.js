import React, {Component} from 'react'
import {Routes,Route} from 'react-router-dom'
import AOS from 'aos';
import Home from './pages/HomePage'
import AboutMe from './components/content/AboutMe'
import WorkPage from './pages/WorksPage'


const ThemeContext = React.createContext('dark')

export default class App extends Component {
  
  componentDidMount() {
    // or simply just AOS.init();
    AOS.init({
      // initialise with other settings
      duration : 2000
    });
  }

  render(){
    return(
        <Routes>
          <Route path="/" element={<Home theme="dark"/>} >
            <Route path="/about-me" element={<AboutMe />} />  
          </Route>
          <Route path="/work" element={<WorkPage theme="light"/>} />
        </Routes>
    );
  }
}