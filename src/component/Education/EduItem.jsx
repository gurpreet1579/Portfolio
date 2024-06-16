import React from 'react';
import './Education.css';

export default function EduItem({ collegeInfo }) {
    return (
        <div className='edu-item-container'>
            <ul>
                <li>College: {collegeInfo.college}</li>
                <li>Degree: {collegeInfo.degree}</li>
                <li>Start Date: {collegeInfo.startDate}</li>
                <li>End Date: {collegeInfo.endDate}</li>
                <li>City: {collegeInfo.city}</li>
                <li>Country: {collegeInfo.country}</li>
            </ul>
        </div>
    )
}
