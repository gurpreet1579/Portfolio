import './About.css';
import Skills from '../Skills/Skills';
const About = () => {
    return (
        <section className='about-container'>
            <div className='about-info'>
                <h1>About Me</h1>
                <p>Software developer with around 1.5 years of experience seeking career opportunities in front-end and back-end development.</p>
            </div>
            <div className='skill'>
                <Skills></Skills>
            </div>
        </section >
    )
}
export default About;