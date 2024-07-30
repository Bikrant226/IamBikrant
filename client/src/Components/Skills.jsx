import { useState } from 'react';
import '../styles/skills.css'
import Modal from './Modal';
import { technicalSkills,softSkills } from '../datas/skills';


function Skills() {
  const [show,setShow]=useState(false)
  const handleClick=(e)=>{
    e.preventDefault();
    setShow((prev)=>!prev)
  }
  return (
    <div className='skills-parent'>
      <p id='skill-header'>My skills</p>
      <p id='skill-text' onClick={handleClick}>Technical Skills</p>
      {show?<Modal skills={technicalSkills}/>:null}
    </div>
  )
}

export default Skills
