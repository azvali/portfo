import React from 'react';
import './Main.css';
import backgroundVideo from '../assets/video/background.mp4'; // Include your background video here
import avatar from '../assets/img/avatar.png';
import fooducateImg from '../assets/img/fooducate.png';
import aiImg from '../assets/img/aiimg.png';
import sortImg from '../assets/img/sortImg.png';
import ouLogo from '../assets/img/ouLogo.jpg';
import dhsLogo from '../assets/img/dhs.png';

function Main() {
    return (
        <div className="container">
            <video autoPlay muted loop className="background-video">
                <source src={backgroundVideo} type="video/mp4" />
            </video>
            <header className="hero">
                <img src={avatar} alt="Yousef Mardrosyan" className="avatar"/>
                <h1>Yousef Mardrosyan</h1>
                <p>Computer Science Senior at Oakland University with a passion for web and software development, AI innovation, and problem-solving. Proficient in <strong>Java, Python, JavaScript, React, and more</strong>. Actively contributing to research and real-world projects.</p>
                <div className="contact">
                    <a href="mailto:yousefm2315@gmail.com">Email</a> | 
                    <a href="https://linkedin.com/in/yousefmardrosyan" target="_blank">LinkedIn</a> | 
                    <a href="https://github.com/azvali" target="_blank">GitHub</a>
                </div>
            </header>

            <section className="projects">
                <h2>Projects</h2>
                <div className="project-cards">
                    <div className="project-card">
                        <img src={fooducateImg} alt="Fooducate App"/>
                        <h3>Fooducate App</h3>
                        <p>Led the development of an AI-driven nutrition app that identifies nutritional values from images using React Native and Machine Learning, enhancing user engagement and health tracking.</p>
                    </div>
                    <div className="project-card">
                        <img src={aiImg} alt="AI Assistant"/>
                        <h3>AI Assistant</h3>
                        <p>Developed a Python-based chatbot using GPT API to assist students with project development and UML diagram generation, improving project outcomes and learning experiences.</p>
                    </div>
                    <div className="project-card">
                        <img src={sortImg} alt="Sort Visualizer"/>
                        <h3>Sort Visualizer</h3>
                        <p>Created an interactive tool to demonstrate sorting algorithms, engaging over 1,000 users with a user-friendly interface and customizable settings.</p>
                    </div>
                </div>
            </section>

            <section className="experience">
                <h2>Experience</h2>
                <div className="experience-item">
                    <img src={dhsLogo} alt="DHS Logo"/>
                    <div>
                        <h3>Software Engineering Intern - DHS</h3>
                        <p>Redesigned the Chief of Staff landing page, improving user experience and accessibility, and ensuring Section 508 compliance.</p>
                    </div>
                </div>
                <div className="experience-item">
                    <img src={ouLogo} alt="Oakland University Logo"/>
                    <div>
                        <h3>Research Assistant - Oakland University</h3>
                        <p>Developed AI-enhanced tools using Python and GPT models, improving research outcomes and identifying vulnerabilities in AI frameworks.</p>
                    </div>
                </div>
                <div className="experience-item">
                    <img src={ouLogo} alt="Oakland University Logo"/>
                    <div>
                        <h3>CS Grader - Oakland University</h3>
                        <p>Provided accurate and constructive feedback for 60 students, enhancing their understanding of complex topics and maintaining grading consistency.</p>
                    </div>
                </div>
            </section>

            <section className="education">
                <h2>Education</h2>
                <div className="education-item">
                    <img src={ouLogo} alt="Oakland University Logo"/>
                    <div>
                        <h3>Oakland University</h3>
                        <p>Bachelor of Science in Computer Science, graduating December 2024. Consistent Dean’s List honoree with a 3.5 GPA.</p>
                    </div>
                </div>
            </section>

            <footer>
                <p>&copy; 2024 Yousef Mardrosyan. All rights reserved.</p>
                <p>
                    <a href="mailto:yousefm2315@gmail.com">Email</a> | 
                    <a href="https://www.linkedin.com/in/yousef-mardrosyan-3b38b4268/" target="_blank">LinkedIn</a> | 
                    <a href="https://github.com/azvali" target="_blank">GitHub</a>
                </p>
            </footer>
        </div>
    );
}

export default Main;
