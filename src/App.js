import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Works from './components/homecontent/Work'
import AboutMe from './components/homecontent/AboutMe'
import WorkPage from './pages/WorksPage'
export default function App () {
  return(
      <Routes>
        <Route path="/" element={<HomePage theme="dark"/>}>
          <Route path="/" element={<Works />} /> 
          <Route path="/about-me" element={<AboutMe />} />  
        </Route>
        <Route path="/work" element={<WorkPage theme="light"/>} />
      </Routes>
  );  
}
