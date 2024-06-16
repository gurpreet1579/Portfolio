import React from 'react';

const ExperienceItem = ({ title, expItems }) => (
    <div>
        {expItems.map((item, index) => (
            <div className='exp-item-container'>
                <ul>
                    <li key={index}>Position: {item.position}</li>
                    <li key={index}>Company: {item.company}</li>
                    <li key={index}>From: {item.startDate}</li>
                    <li key={index}>To: {item.endDate}</li>
                </ul>
            </div>
        ))}
    </div>
);

export default ExperienceItem;
