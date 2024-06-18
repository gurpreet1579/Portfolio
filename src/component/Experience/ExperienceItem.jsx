import React from 'react';
import AmdocsLogo from '../../assets/images/amdocs-logo.jpeg';
import QoreFiLogo from '../../assets/images/qorefi-logo.jpeg';

const companyLogos = {
    'Amdocs': AmdocsLogo,
    'QoreFi': QoreFiLogo,
};

const ExperienceItem = ({ title, expItems }) => (
    <div className="space-y-4 flex justify-center align-center">
        {expItems.map((item, index) => (
            <div class="w-full bg-white flex flex-row justify-center items-center pb-10">
                <img class="mx-10 w-24 h-24 mb-3 rounded-full shadow-lg" src={companyLogos[item.company]} alt={item.company} />
                <div>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{item.startDate} - {item.endDate}</span>
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.position}</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{item.company}</span>
                </div>
            </div>
        ))}
    </div>
);

export default ExperienceItem;
