import React from 'react';
import PROJECTS from '../data/projects';

const Project = (props) => {
    /*
    //was right when it was a class that extended Component
    const title = this.props.project.title;        
    const image = this.props.project.image;
    ...
    */
    const { title, image, description, link } = props.project;

    return (
        //the project data will be located in the project props 
        <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
            <a href={link}>
                <h3>{title}</h3>
                <img src={image} alt='profile' style={{ height: 120 }}/>
            </a>
            <p>{description}</p>
        </div>
    )
}

const Projects = () => (
    <div>
        <h2>Highlighted Projects</h2>
        <div>
            {
                PROJECTS.map(PROJECT => (
                        <Project key={PROJECT.id} project={PROJECT} />
                    )
                )
            }
        </div>
    </div>
)

export default Projects;
