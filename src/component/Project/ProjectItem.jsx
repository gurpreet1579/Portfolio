import React from 'react';
import ChatApp from '../../assets/images/chat.webp';
import Eventhub from '../../assets/images/eventhub.jpeg';

const projectPhoto = {
    'Multi-User Chat Java Application': ChatApp,
    'EventHub': Eventhub,
};
const ProjectItem = ({ projectItems }) => (
    <div>
        {projectItems.map((item, index) => (
            <div key={index} className="flex flex-row items-center mb-10">
                <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
                    <img className="object-cover w-full h-96 md:h-auto md:w-48 md:rounded-t-lg md:rounded-none md:rounded-l-lg" src={projectPhoto[item.name]} alt={item.name} /></a>

                <div className="flex flex-col justify-between p-4 leading-normal w-full">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Technologies Used: {item.technologies}</p>
                </div>
            </div>

            // <div className='project-item-container'>
            //     <ul>
            //         <li key={index}>Name: {item.name}</li>
            //         <li key={index}>Description: {item.description}</li>
            //         <li key={index}>Technologies: {item.technologies}</li>
            //         <li key={index}><a href={item.githubLink} >Github</a></li>
            //     </ul>
            // </div>
        ))}
    </div>
);

export default ProjectItem;
