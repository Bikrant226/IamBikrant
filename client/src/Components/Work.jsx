import '../styles/work.css'
import {projects} from '../datas/projects'
function Work() {

  console.log(projects)
  return (
    <div className='work-parent'>
      <p id='work-header'>My works</p>
      <div className='work-list'>
        {
          projects.map(item=>(
            <div key={item.id} className='projects'>
              <p id='title'><strong>{item.title}</strong></p>
              <p id='desc'>{item.description}</p>
              <div id='external-link'>
                <a href={item.liveUrl}>View Live</a>
                <a href={item.githubUrl}>Github</a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Work
