import React from 'react';
import './Main.css';
import backgroundVideo from '../assets/video/background.mp4'
import image from '../assets/img/avatar.png'
import sortimg from '../assets/img/sortImg.png'
import chemimg from '../assets/img/chemimg.png'
import aiimg from '../assets/img/aiimg.png'
import ouimg from '../assets/img/ouLogo.jpg'


function Main(){
    return(
        <div className='homeContainer'>
            <video autoPlay muted loop playsInline playbackRate={.1}> 
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
                    <div className='sortContainer'>   
                        <img id='sortimg' src={sortimg} alt='Project Image'></img>
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
                    </div>
                    <h1>ChemTrack App</h1>
                    <div className='chemContainer'>
                        <img id='chemimg' src={chemimg}></img>
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
                    </div>
                    <h1>AI Assistant</h1>
                    <div className='aiContainer'>
                    <img id='aiimg' src={aiimg}></img>
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
                </div>
            </main>
           
           <div className='education'>

            <h1>Education</h1>
            <div className='schoolContainer'>
                <img src={ouimg}></img>
                <p>
                    I am currently a senior at Oakland University, majoring in computer 
                    science. My studies have provided me with a solid foundation in various
                    areas of computer science, including advanced algorithms, data 
                    structures, and artificial intelligence. Throughout my time at 
                    Oakland University, I have honed my skills in web and software 
                    development, utilizing tools such as Java, C, HTML, CSS, JavaScript, 
                    React, and Python. My academic journey has been complemented by practical
                    experiences, including grading computer science assignments and 
                    contributing to research projects. After graduating this December,
                    I plan to further my education by pursuing a master's degree in
                    computer science at Oakland University, with a continued focus 
                    on innovative problem-solving and advanced technologies.
                </p>
            </div>


            <h1>Experience</h1>
            <div className='experienceContainer'>
            <h2>Research Assistant at Oakland University (May 2023 -- Present)</h2>
                <div className='researchContainer'> 
                    <p>
                        As a Research Assistant at Oakland University, 
                        I led the development of an AI-enhanced tool using 
                        Python and GPT models, aimed at assisting computer 
                        science students. One of my key innovations was a UML 
                        diagram generator that translates project descriptions 
                        into accurate diagrams, improving fault tolerance through 
                        strategic input alteration and seamless GPT API integration. 
                        Additionally, I contributed to research efforts by 
                        identifying vulnerabilities in AI frameworks like PyTorch 
                        and TensorFlow, supporting a PhD student's data collection 
                        and analysis. My role involved enhancing the tool with 
                        additional features to simplify the development process, 
                        applying my computer science expertise to solve practical, 
                        real-world problems effectively.
                    </p>
                </div>
                <h2>CS Grader at Oakland University (Jan 2024 -- Dec 2024)</h2>
                <div className='graderContainer'>
                    <p>
                        In my role as a CS Grader at Oakland University, 
                        I was responsible for grading assignments and exams 
                        for 60 students in an introductory computer science 
                        course on Excel, working closely with Professor Othman 
                        to ensure accuracy and consistency. I provided detailed 
                        feedback and support to students, aiding in the 
                        comprehension of complex topics and enhancing their 
                        learning experience. My efforts contributed to a more 
                        effective learning environment, helping students to 
                        grasp foundational concepts and improve their 
                        performance in the course.
                    </p>
                </div>
            </div>

           </div>
        </div>
        

    );
}


export default Main;