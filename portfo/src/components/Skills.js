import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaJsSquare, FaCss3Alt, FaHtml5, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa';
import { SiFlask, SiPostgresql, SiDotnet, SiCplusplus, SiFirebase } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import './Skills.css';

const skills = [
    { name: 'C#', icon: <TbBrandCSharp /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'C++', icon: <SiCplusplus /> },
    { name: 'SQL', icon: <FaDatabase /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'ASP.NET Core', icon: <SiDotnet /> },
    { name: 'Flask', icon: <SiFlask /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'AWS', icon: <FaAws /> },
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item" data-text={skill.name}>
                        <div className="skill-icon">{skill.icon}</div>
                        <span className="skill-name">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills; 