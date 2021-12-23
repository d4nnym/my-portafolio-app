<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
=======
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
>>>>>>> Stashed changes
