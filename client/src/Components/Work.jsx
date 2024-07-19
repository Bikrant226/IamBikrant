import  { useState } from 'react'
import '../styles/work.css'
import Modal from './Modal'


export default function Work() {
    const works=[
        {
            "id":1,
            "title":"Demo Project 1",
            "description":"This is a demo project 1",
            "thumbnail":"/assets/project-management.png"
        }
    ]

    const [work,setWork]=useState([]);
    const[isActive,setIsActive]=useState(false);

    const handleClick=(id)=>{
        const filteredWork=works.find(item=>item.id==id)
        setWork([filteredWork]);
        setIsActive(prev=>!prev)
    }
    console.log(isActive)
    

  return (
    <>
        <div className='work-parent-container'>
            <p id='text'>My Works</p>
            <div className='parent'>
            {works.map(i=>
                <div key={i.id} id='work-container' onClick={()=>handleClick(i.id)}>
                    <p id='title'>{i.title}</p>
                    <img src={i.thumbnail} alt="demo" />
                </div>
            )}
            </div>
        </div>

        {isActive && <Modal isActive={isActive} setIsActive={setIsActive} workList={work}/>}
    </>
  )
}
