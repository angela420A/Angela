// import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return(
    <div className='container'>
      <div className='container-header'>
        <NavBar />
      </div>
      <div className='container-body'>
        <Home />
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  )
}

export default App
