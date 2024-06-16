import { useState } from "react";
import { education } from "../../data/data";
import EduItem from "./EduItem";
import './Education.css';

const Education = () => {
    const [educationItems, setEducationItems] = useState(education);
    return <>
        <div className="edu-container">
            <h1>Education</h1>
            <div className="edu-list-container">
                {educationItems.map((eduItem, index) => (
                    <EduItem key={index} collegeInfo={eduItem}></EduItem>
                ))}
            </div>
        </div>
    </>
}

export default Education;