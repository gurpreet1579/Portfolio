import { useState } from "react"
import ExperienceItem from "./ExperienceItem"
import { professionalExperience } from "../../data/data";
import './Experience.css';

const Experience = () => {
    const [experience, setExperience] = useState(professionalExperience);
    return <>
        <div className="exp-container">
            <h1>Professional Experience</h1>
            <ExperienceItem expItems={experience}></ExperienceItem>
        </div>
    </>
}
export default Experience