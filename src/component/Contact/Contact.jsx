import React, { useState } from "react";
import { contact } from "../../data/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faLinkedin } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const [contactInfo, setContactInfo] = useState(contact);

    return (
        <>
            <section id='contact' className="space-x-4 px-4 py-8 bg-white dark:bg-gray-800">
                <h1 className="text-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl md:text-5xl dark:text-white">
                    GET <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">IN</mark> TOUCH
                </h1>
                <div className="space-y-4 flex justify-center items-center">
                    <div className="w-full flex flex-row justify-around items-center p-6 ">
                        {/* <img className="mx-10 w-24 h-24 mb-3 shadow-lg rounded-full" src="path/to/your/image.jpg" alt="Profile" /> */}
                        <div>
                            <div className="flex items-center mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                <FontAwesomeIcon icon={faUser} className="mr-2" />
                                {contactInfo.name}
                            </div>
                            <div className="flex items-center mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                {contactInfo.email}
                            </div>
                            <div className="flex items-center mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                                {contactInfo.mobile}
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                <FontAwesomeIcon icon={faLinkedinIn} className="mr-2" />
                                <a href={contactInfo.linkedIn} className="text-blue-600 dark:text-blue-400" target="_blank" rel="noopener noreferrer">
                                    LinkedIn
                                </a>
                            </div>
                            <div className="flex items-center mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                <FontAwesomeIcon icon={faGithub} className="mr-2" />
                                <a href={contactInfo.githubLink} className="text-gray-900 dark:text-gray-300" target="_blank" rel="noopener noreferrer">
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default Contact;
