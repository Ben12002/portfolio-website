import Project from './Project.jsx'
import projects from '../data.jsx'
import { useEffect } from 'react';
import { useState } from 'react'
import '../ProjectSection.css'

function ProjectSection(){
    const [indexToShow, setIndexToShow] = useState(0);

    let currProject = projects[indexToShow];
    
    function handleClick(e, index){
        setIndexToShow(index);
        
    }
    return(
        <div id="projectsheading" className='projects'>
            <h2>PROJECTS</h2>
            <div className='content'>
                <div className='currentProject'>
                    <Project id={currProject.id} 
                             title={currProject.title}
                             technologies={currProject.technologies}
                             description={currProject.description}
                             repoLink={currProject.repoLink}
                             thumbnail={currProject.thumbnail}
                             primaryColor={currProject.primaryColor}
                             width={currProject.width}/>
                </div>
                <ul className='sidebar'>
                    {projects.map((p, index) => (<li key={p.id} className={index === indexToShow ? "selected" : ""} onClick={(e) => handleClick(e, index)}>{p.title}</li>) )}
                </ul>
            </div>
        </div>
    )
}

export default ProjectSection