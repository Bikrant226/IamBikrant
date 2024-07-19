
import '../styles/modal.css'


function Modal(props) {
    const x=props.workList

  return (
    <>
   {  
    x.map(i=>
        <div key={i.id} className='model-parent'>
            <div className='header'>
                <p>{i.title}</p>
                <button onClick={()=>props.setIsActive(false)}>X</button>
            </div>
            <p className='body'>{i.description}</p>
        </div>
    )
  }
  </>
  )
}

export default Modal
