import React from 'react';
import './Main.css';

// Hero & Projects
import avatar from '../assets/img/avatar.png';
import fooducateImg from '../assets/img/fooducate.png';
import aiImg from '../assets/img/aiimg.png';
import sortImg from '../assets/img/sortImg.png';
import githubLogo from '../assets/img/githublogo.png';
import rpiImg from '../assets/img/rpi.jpg';
import resume from '../assets/img/Yousef_Mardrosyan.pdf';

// Experience Logos
import dhsLogo from '../assets/img/dhs.png';
import ouLogo from '../assets/img/ouLogo.jpg';

function Main() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">Yousef Mardrosyan</div>
          <ul className="nav-links">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <img
            src={avatar}
            alt="Yousef Mardrosyan"
            className="hero-avatar"
          />
          <h1>Yousef Mardrosyan</h1>
          <p className="hero-text">
            December 2024 graduate from Oakland University with a B.S. in Computer Science (GPA: 3.61). 
            Passionate about building AI-driven software solutions using 
            <strong> Java, Python, JavaScript, React,</strong> and more. 
            Experienced through DHS and university research roles, I’m dedicated to 
            delivering innovative solutions and thriving on real-world problem-solving.
          </p>

          <div className="hero-links">
            <a 
              href={resume} 
              download
            >
              Resume
            </a>
            <a 
              href="https://github.com/azvali"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/yousef-mardrosyan-3b38b4268/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-image-wrapper">
              <img 
                src={fooducateImg}
                alt="Fooducate App"
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3>Fooducate App</h3>
              <p>
                Led the development of an AI-driven nutrition app that identifies 
                nutritional values from images using React Native and Machine 
                Learning, enhancing user engagement and health tracking.
              </p>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="project-card">
            <div className="project-image-wrapper">
              <img 
                src={aiImg}
                alt="AI Assistant"
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3>AI Assistant</h3>
              <p>
                Developed a Python-based chatbot using GPT API to assist students 
                with project development and UML diagram generation, improving 
                project outcomes and learning experiences.
              </p>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <div className="project-image-wrapper">
              <img
                src={sortImg}
                alt="Sort Visualizer"
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3>Sort Visualizer</h3>
              <p>
                Created an interactive tool to demonstrate sorting algorithms, 
                engaging over 1,000 users with a user-friendly interface and 
                customizable settings.
              </p>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card">
            <div className="project-image-wrapper">
              <img
                src={githubLogo}
                alt="Parallel GPT Summaries"
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3>Parallel GPT Summaries</h3>
              <p>
                Built a web app to retrieve and summarize GitHub commits using GPT. 
                Demonstrated performance gains by running requests in parallel vs. 
                sequential, integrating a timer to visualize speed differences.
              </p>
            </div>
          </div>

          {/* Project 5 */}
          <div className="project-card">
            <div className="project-image-wrapper">
              <img
                src={rpiImg}
                alt="Raspberry Pi Parking Availability Monitor"
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3>Raspberry Pi Parking Availability Monitor</h3>
              <p>
                Engineered a camera-based system on Raspberry Pi to capture hourly 
                parking lot images, used GPT to evaluate availability, and hosted 
                live updates on a website for real-time status checks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Programming */}
      <section className="competitive-programming-section">
        <h2 className="section-title">Competitive Programming</h2>
        <p className="section-text">
          I sharpen my algorithmic thinking and problem-solving skills by solving{" "}
          <strong>2 LeetCode problems per day</strong>. I keep a record of my 
          solutions in a{" "}
          <a 
            href="https://github.com/azvali/leetcode_archive" 
            target="_blank"
            rel="noreferrer"
          >
            GitHub repository
          </a>, and maintain detailed notes in an{" "}
          <a 
            href="https://docs.google.com/spreadsheets/d/1rTn-DABu29AmOv3qDfabsaSrVK8gUiiL/edit?usp=sharing" 
            target="_blank"
            rel="noreferrer"
          >
            Excel sheet
          </a>.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-content">
          <p>
            <strong>Programming Languages:</strong> Java, Python, JavaScript, TypeScript, C++, SQL, C
          </p>
          <p>
            <strong>Frameworks/Libraries:</strong> React, React Native, Node.js, Flask
          </p>
          <p>
            <strong>Tools & Technologies:</strong> GPT API, API Integrations, Docker, Figma, Firebase
          </p>
          <p>
            <strong>Soft Skills:</strong> Communication, Teamwork, Problem-Solving, Leadership
          </p>
          <p>
            <strong>Other:</strong> Linux, UML Diagramming, Visual Studio Code, Section 508 Compliance
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section" id="experience">
        <h2 className="section-title">Experience</h2>

        {/* DHS Intern */}
        <div className="experience-card">
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            {/* Experience Logo */}
            <img 
              src={dhsLogo} 
              alt="DHS Logo" 
              style={{ width: '50px', marginRight: '15px', borderRadius: '5px' }}
            />
            <h3>Software Engineering Intern – DHS</h3>
          </div>
          <p>
            Redesigned the Chief of Staff landing page, improving user 
            experience and accessibility, ensuring Section 508 compliance.
          </p>
        </div>

        {/* Research Assistant */}
        <div className="experience-card">
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img 
              src={ouLogo} 
              alt="OU Logo" 
              style={{ width: '50px', marginRight: '15px', borderRadius: '5px' }}
            />
            <h3>Research Assistant – Oakland University</h3>
          </div>
          <p>
            Developed AI-enhanced tools using Python and GPT models, 
            improving research outcomes and identifying vulnerabilities 
            in AI frameworks.
          </p>
        </div>

        {/* CS Grader */}
        <div className="experience-card">
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img 
              src={ouLogo} 
              alt="OU Logo" 
              style={{ width: '50px', marginRight: '15px', borderRadius: '5px' }}
            />
            <h3>CS Grader – Oakland University</h3>
          </div>
          <p>
            Provided accurate and constructive feedback for 60 students, 
            enhancing their understanding of complex topics and 
            maintaining grading consistency.
          </p>
        </div>
      </section>

      {/* Education Section */}
      <section className="education-section" id="education">
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img 
              src={ouLogo} 
              alt="OU Logo" 
              style={{ width: '50px', marginRight: '15px', borderRadius: '5px' }}
            />
            <h3>Oakland University</h3>
          </div>
          <p>
            Bachelor of Science in Computer Science, graduated in December 2024. 
            Consistent Dean’s List honoree with a 3.61 GPA.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <h2 className="section-title">Contact</h2>
        <div style={{
          maxWidth: '600px', 
          margin: '0 auto', 
          background: '#fff', 
          borderRadius: '10px', 
          boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
          padding: '20px',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>
            Have a question or want to work together?
          </p>
          <p style={{ marginBottom: '15px' }}>
            <strong>Email:</strong>{" "}
            <a href="mailto:yousefm2315@gmail.com">yousefm2315@gmail.com</a>
          </p>
          <p style={{ marginBottom: '15px' }}>
            <strong>LinkedIn:</strong>{" "}
            <a 
              href="https://www.linkedin.com/in/yousef-mardrosyan-3b38b4268/"
              target="_blank"
              rel="noreferrer"
            >
              Yousef Mardrosyan
            </a>
          </p>
          <p style={{ marginBottom: '15px' }}>
            <strong>GitHub:</strong>{" "}
            <a 
              href="https://github.com/azvali"
              target="_blank"
              rel="noreferrer"
            >
              azvali
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <p>&copy; 2025 Yousef Mardrosyan. All rights reserved.</p>
        <p>
          <a href="mailto:yousefm2315@gmail.com" target="_blank" rel="noreferrer">
            Email
          </a> | 
          <a 
            href="https://www.linkedin.com/in/yousef-mardrosyan-3b38b4268/" 
            target="_blank" 
            rel="noreferrer"
          >
            LinkedIn
          </a> | 
          <a 
            href="https://github.com/azvali" 
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a> | 
          <a href={resume} download>Resume</a>
        </p>
      </footer>
    </>
  );
}

export default Main;
