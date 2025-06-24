import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import { 
  FaReact, FaNodeJs, FaBrain
} from 'react-icons/fa';
import { SiFlask, SiPostgresql, SiFirebase, SiDotnet, SiSocketdotio } from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

import vendoraImg from '../assets/img/vendora.png';
import whispImg from '../assets/img/Whisp.png';
import fooducateImg from '../assets/img/fooducate.png';

const projectsData = [
    {
      "title": "Vendora",
      "description": "Built a full-stack e-commerce platform allowing users to create accounts, list items for sale, upload images, and browse products. Developed a secure and scalable backend in C# using ASP.NET Core, implementing JWT-based authentication and a PostgreSQL database.",
      "tags": ["React", "CSharp", "ASP.NET Core", "PostgreSQL"],
      "image": vendoraImg,
      "link": "https://github.com/azvali/Vendora"
    },
    {
      "title": "Whisp",
      "description": "Built a full-stack messaging app with real-time friend requests and chat using Socket.IO. Implemented secure authentication with JWT tokens and created a RESTful API in Flask for user, message, and friend management.",
      "tags": ["React", "Flask", "PostgreSQL", "Socket.IO"],
      "image": whispImg,
      "link": "https://github.com/azvali/Whisp"
    },
    {
      "title": "Fooducate",
      "description": "Created a mobile nutrition app that analyzes food images to extract nutritional data. Integrated an AI-driven diet coach for personalized meal suggestions and used Firebase for secure user authentication and calorie tracking.",
      "tags": ["React", "Firebase", "OpenAI", "Node.js"],
      "image": fooducateImg,
      "link": "https://github.com/azvali/Fooducate2"
    }
];

const tagIcons = {
  "React": <FaReact />,
  "CSharp": <TbBrandCSharp />,
  "ASP.NET Core": <SiDotnet />,
  "PostgreSQL": <SiPostgresql />,
  "Flask": <SiFlask />,
  "Socket.IO": <SiSocketdotio />,
  "Firebase": <SiFirebase />,
  "OpenAI": <FaBrain />,
  "Node.js": <FaNodeJs />
};

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="projects-section"
    >
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} iconMap={tagIcons} />
        ))}
      </div>
    </section>
  );
};

export default Projects; 