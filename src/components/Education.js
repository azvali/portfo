import React from 'react';
import './Education.css';

const educationData = [
    {
      institution: "Oakland University",
      degree: "Bachelor of Science in Computer Science",
      duration: "Graduated Dec 2024",
      details: ["GPA: 3.61/4.0", "Dean's List: Fall 2021 – Fall 2024"]
    }
];

const Education = () => {
    return (
        <section id="education" className="education-section">
            <div className="education-list">
                {educationData.map((edu, index) => (
                    <div key={index} className="education-item">
                        <h3>{edu.degree}</h3>
                        <p className="institution">{edu.institution} | {edu.duration}</p>
                        {edu.details && edu.details.map((detail, i) => <p key={i} className="details">{detail}</p>)}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education; 