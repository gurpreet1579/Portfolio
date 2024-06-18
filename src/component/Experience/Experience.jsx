import { useState } from "react"
import ExperienceItem from "./ExperienceItem"
import { professionalExperience } from "../../data/data";

const Experience = () => {
    const [experience, setExperience] = useState(professionalExperience);
    return (
        <>
            <section id='experience' className=" space-x-4 px-4 py-8 bg-white">
                <h1 className="text-center mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl md:text-5xl dark:text-white">
                    PROFESSSIONAL <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">EXPERIENCE</mark>
                </h1>
                <div className='p-6 '>
                    <ExperienceItem expItems={experience}></ExperienceItem>
                </div>
            </section>
        </>
    )

}
export default Experience