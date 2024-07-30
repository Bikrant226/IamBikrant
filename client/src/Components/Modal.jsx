import '../styles/modal.css'

function Modal({skills}) {
  return (
    <div className='modal-parent'>
        {skills.map(item=>(
            <div key={item.id} >
                <p id='subcategory'>&ensp; &ensp; &ensp;{item.subCategory}</p>
                {
                    item.list.map(i=>(
                        <ul key={i}><li>{i}</li></ul>
                    ))
                }
            </div>
        ))}
    </div>
  )
}

export default Modal
