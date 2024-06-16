import React from 'react';

const SkillsList = ({ title, items }) => (
    <div>
        <h1>{title}</h1>
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);

export default SkillsList;
