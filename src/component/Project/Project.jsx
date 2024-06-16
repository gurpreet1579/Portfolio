import { useState } from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../../data/data";

const Project = () => {
    const [projectItems, setProjectItem] = useState(projects);
    return <>
        <div className="project-container">

            <h1>Projects</h1>
            <ProjectItem projectItems={projectItems}></ProjectItem>

        </div>
    </>
}
export default Project;