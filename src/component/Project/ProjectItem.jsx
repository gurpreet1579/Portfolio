import React from 'react';

const ProjectItem = ({ projectItems }) => (
    <div>
        {projectItems.map((item, index) => (
            <div className='project-item-container'>
                <ul>
                    <li key={index}>Name: {item.name}</li>
                    <li key={index}>Description: {item.description}</li>
                    <li key={index}>Technologies: {item.technologies}</li>
                    <li key={index}><a href={item.githubLink} >Github</a></li>
                </ul>
            </div>
        ))}
    </div>
);

export default ProjectItem;
