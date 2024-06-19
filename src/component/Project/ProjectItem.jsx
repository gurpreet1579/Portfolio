import React from 'react';
import ChatApp from '../../assets/images/chat.webp';
import Eventhub from '../../assets/images/eventhub.jpeg';

const projectPhoto = {
    'Multi-User Chat Java Application': ChatApp,
    'EventHub': Eventhub,
};

const ProjectItem = ({ projectItems }) => (
    <div className="flex flex-col space-y-10">
        {projectItems.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center md:items-center mb-10 w-full">
                <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="flex justify-center align-center w-full md:w-1/3 mb-4 md:mb-0">
                    <img className="object-cover w-64 h-48 md:h-48 lg:h-auto md:rounded-t-lg md:rounded-none md:rounded-l-lg" src={projectPhoto[item.name]} alt={item.name} />
                </a>
                <div className="flex flex-col justify-between p-4 leading-normal w-full md:w-2/3">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Technologies Used: {item.technologies}</p>
                </div>
            </div>
        ))}
    </div>
);

export default ProjectItem;
