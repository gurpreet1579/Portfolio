import React from 'react';
import About from '../About/About';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className="home">
            <About />
            <Education />
            <Experience />
            <Project />
            <Contact />
        </div>
    );
}

export default Home;
