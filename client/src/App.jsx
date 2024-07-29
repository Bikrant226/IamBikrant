import React from 'react'
import About from './Components/About'
import Work from './Components/Work'
import Skills from './Components/Skills'
import './styles/app.css'

function App() {
  return (
    <div className='parent'>
      <div className='left'>
        <About/>
        <Skills/>
      </div>
      <div className='right'>
        <Work/>
      </div>
    </div>
  )
}

export default App
