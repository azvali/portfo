import React from 'react';
import './Experience.css'; 

const ExperienceDetail = ({ experience }) => {
  if (!experience) {
    return <div>Experience not found.</div>;
  }

  return (
    <div className="timeline-item">
      <div className="timeline-content">
        <h3>{experience.role}</h3>
        <p className="company-duration">{experience.company} | {experience.duration}</p>
        <ul>
          {experience.description.map((desc, i) => <li key={i}>{desc}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default ExperienceDetail; 