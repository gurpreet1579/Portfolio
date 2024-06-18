import React, { useState } from 'react'
import { skills, toolsAndDatabases, softSkills } from '../../data/data.js';
import SkillsList from './SkillList';
// import './Skill.css';

export default function Skills() {
    const [skillsState, setSkills] = useState(skills);
    const [toolsAndDatabasesState, setToolsAndDatabases] = useState(toolsAndDatabases);
    const [softSkillsState, setSoftSkills] = useState(softSkills);

    return (
        <div>
            <SkillsList title="Skills" items={skillsState} />
            <SkillsList title="Tools & Databases" items={toolsAndDatabasesState} />
            <SkillsList title="Soft Skills" items={softSkillsState} />
        </div>
    );
}
