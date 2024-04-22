import React from 'react';
import './Main.css';
import backgroundVideo from '../assets/video/background.mp4'
import image from '../assets/img/avatar.png'
import sortimg from '../assets/img/sortImg.png'
function Main(){
    return(
        <div className='homeContainer'>
            <video autoPlay muted loop playsInline> 
                <source src={backgroundVideo} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            <div className='heroContainer'>
                <img src={image} alt='avatar'></img>
                <h1>
                    Hello!
                </h1>
                <br/>
                <p>
                    My name is <span>Yousef Mardrosyan</span>. I'm <span>studying computer science</span> at 
                    Oakland University, focusing on <span>web and software development</span>. 
                    My main tools are <span>Java, C, HTML, CSS, JavaScript, React, React Native, and Python</span>. 
                    Outside of my courses, I grade computer science assignments and 
                    contribute to research projects. Recently, I've developed an 
                    interest in artificial intelligence and innovative problem-solving 
                    approaches.
                </p>

                <div className='buttons'>
                    <a  target='blank' href='https://www.linkedin.com/in/yousef-mardrosyan-3b38b4268/'>LinkedIn</a>
                    <span>/</span>
                    <a  target='blank' href='https://github.com/azvali'>Github</a>
                    <span>/</span>
                    <a  href="mailto:yousefm2315@gmail.com">Email: yousefm2315@gmail.com</a>
                    <span>/</span>
                    <a  href="tel:+12488080446">Phone: 248-808-0446</a>

                </div>
            </div>

            <main className='mainBody'>
                
                <div className='title'>
                    <h1>Projects</h1>
                </div>

                <div className='projectsContainer'>
                    <h1>Sorting Visualizer</h1>
                    <img src={sortimg} alt='Project Image'></img>
                    <p>
                        I developed the "Sort Visualizer," a web-based application that visually 
                        demonstrates sorting algorithms such as Bubble and Quick Sort, designed 
                        for educational purposes. This interactive tool allows users to select 
                        different algorithms and adjust the sorting speed to enhance learning. It 
                        was built using HTML5, CSS3, and JavaScript, ensuring that the application 
                        works seamlessly across various devices. The use of HTML5 ensures a 
                        structured content layout, while CSS3 adds the necessary styling, and 
                        JavaScript enables dynamic interactions, making the user experience both 
                        intuitive and responsive.
                    </p>
                    <h1>ChemTrack App</h1>
                    <img></img>
                    <p>
                        I am currently developing the ChemTrack App, a project that leverages 
                        React Native and React for real-time chemical analysis from sensor data.
                        This application is designed to support healthcare and law enforcement
                        professionals by providing immediate insights. It features Bluetooth 
                        connectivity for seamless sensor-app communication and utilizes the 
                        GPT API for advanced data interpretation. The project incorporates a
                        range of technologies including MongoDB for database management, 
                        Android Studio for app development, and Git for version control, 
                        all orchestrated within Visual Studio Code.
                    </p>
                    <h1>AI Assistant</h1>
                    <img></img>
                    <p>
                        I developed the AI Assistant, a Python-based tool designed to support 
                        computer science students by integrating GPT models for various functions
                        like UML diagram generation, code review, and streamlined project 
                        development. This tool also incorporates fault tolerance mechanisms to
                        ensure the reliability of results, effectively demonstrating how 
                        artificial intelligence can enhance software development efficiency. 
                        The AI Assistant is built using Python and Tkinter for the GUI, 
                        utilizes Sqlite for data management, and leverages the GPT API for AI 
                        functionalities, all within Visual Studio Code.
                    </p>
                </div>
            </main>
           
        </div>
        

    );
}


export default Main;