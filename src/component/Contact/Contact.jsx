// add linkedIn, github and contact information 

import { useState } from "react";
import { contact } from "../../data/data";

const Contact = () => {
    const [contactInfo, setContactInfo] = useState(contact);
    return <>
        <div >
            <h1>Contact Me</h1>
            <ul>
                <li>{contactInfo.name}</li>
                <li>{contactInfo.address}</li>
                <li>{contactInfo.mobile}</li>
                <li><a href={contactInfo.githubLink}>Github</a></li>
                <li><a href={contactInfo.linkedIn}>LinkedIn</a></li>
            </ul>
        </div>
    </>
}

export default Contact;