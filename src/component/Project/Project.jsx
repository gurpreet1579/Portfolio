import { useState } from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../../data/data";

const Project = () => {
    const [projectItems, setProjectItem] = useState(projects);
    return (
        <>
            <section id='projects' className=" space-x-4 px-4 py-8 bg-gray-100">
                <h1 class="text-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl md:text-5xl dark:text-white">
                    PERSONAL <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">PROJECTS</mark>
                </h1>
                <div className='flex justify-center'>
                    <div className="p-6 ">
                        <ProjectItem projectItems={projectItems}></ProjectItem>
                    </div>
                </div>

            </section>
        </>
    )
    // return <>
    //     <div className="project-container">

    //         <h1>Projects</h1>
    //         <ProjectItem projectItems={projectItems}></ProjectItem>

    //     </div>
    // </>
}
export default Project;