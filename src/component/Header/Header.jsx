import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <h1>My Portfolio</h1>
                <nav className="nav-flex">
                    <ul>
                        <li><Link smooth to="#about">About</Link></li>
                        <li><Link smooth to="#education">Education</Link></li>
                        <li><Link smooth to="#experience">Experience</Link></li>
                        <li><Link smooth to="#project">Projects</Link></li>
                        <li><Link smooth to="#contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
