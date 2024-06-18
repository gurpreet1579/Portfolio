import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
// import './Header.css';

const Header = () => {
    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <FontAwesomeIcon icon={faLaptopCode} className="h-8 text-gray-900 dark:text-white" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Gurpreet Singh</span>
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link smooth to="#about">About</Link>
                        </li>
                        <li>
                            <Link smooth to="#experience">Experience</Link>
                        </li>
                        <li>
                            <Link smooth to="#projects">Projects</Link>
                        </li>
                        <li>
                            <Link smooth to="#contact">Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        // <header className="header">
        //     <div className="container">
        //         <h1></h1>
        //         <nav className="nav-flex">
        //             <ul>
        //                 <li></li>
        //                 <li><Link smooth to="#education">Education</Link></li>
        //                 <li><Link smooth to="#experience">Experience</Link></li>
        //                 <li><Link smooth to="#project">Projects</Link></li>
        //                 <li><Link smooth to="#contact">Contact</Link></li>
        //             </ul>
        //         </nav>
        //     </div>
        // </header>
    );
}

export default Header;
