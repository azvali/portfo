import React, { useState, useEffect, useRef, useContext } from 'react';
import { Rnd } from 'react-rnd';
import { ThemeContext } from '../context/ThemeContext';
import Projects from './Projects';
import Skills from './Skills';
import ExperienceDetail from './ExperienceDetail';
import Education from './Education';
import ContactForm from './ContactForm';
import resumePDF from '../assets/img/Yousef_Mardrosyan.pdf';
import './Terminal.css';

const experienceData = [
    {
      file: "dhs_intern.txt",
      role: "Software Engineering Intern",
      company: "Department of Homeland Security",
      duration: "June 2024 – Aug 2024",
      description: [
        "Collaborated with cross-functional teams to modernize internal web portals, ensuring Section 508 accessibility compliance.",
        "Contributed to Agile sprints by delivering wireframes in Figma and implementing user feedback iteratively.",
        "Assisted with internal tooling using Git and Confluence for version control and documentation."
      ]
    },
    {
      file: "research_assistant.txt",
      role: "Research Assistant",
      company: "Oakland University",
      duration: "May 2023 – June 2024",
      description: [
        "Created an automation script in Python that generated UML diagrams for student projects.",
        "Discovered vulnerabilities in PyTorch and TensorFlow functions, improving framework reliability.",
        "Contributed to embedded systems research using JIRA and Git-based collaboration workflows."
      ]
    },
    {
      file: "teaching_assistant.txt",
      role: "Teaching Assistant, Computer Science",
      company: "Oakland University",
      duration: "Jan 2024 – May 2024",
      description: [
        "Assisted in teaching C# fundamentals and programming concepts to undergraduates.",
        "Held weekly office hours to help students debug and understand algorithmic logic."
      ]
    }
];

const quotes = [
    "It's not a bug, it's an undocumented feature.",
    "Talk is cheap. Show me the code. - Linus Torvalds",
    "There are 10 types of people in the world: those who understand binary, and those who don't.",
    "The computer was born to solve problems that did not exist before. - Bill Gates",
    "One man's crappy software is another man's full-time job.",
    "The quieter you become, the more you are able to hear. - Kali Linux",
];

const Terminal = () => {
    const { toggleTheme } = useContext(ThemeContext);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);
    const [commandHistory, setCommandHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    const [promptReady, setPromptReady] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const [rndState, setRndState] = useState({
        width: 900,
        height: 500,
        x: window.innerWidth / 2 - 450,
        y: window.innerHeight / 2 - 250,
    });
    const terminalBodyRef = useRef(null);
    const terminalEndRef = useRef(null);
    const inputRef = useRef(null);
    const introTimeoutsRef = useRef([]);

    const commands = {
        help: () => (
            <div>
                <p>Available commands:</p>
                <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                    <li><span style={{ color: 'var(--primary-color)', width: '120px', display: 'inline-block' }}>help</span> You are here.</li>
                    <li><span style={{ color: 'var(--primary-color)', width: '120px', display: 'inline-block' }}>whoami</span> A brief introduction.</li>
                    <li><span style={{ color: 'var(--primary-color)', width: '120px', display: 'inline-block' }}>quote</span> Display a random quote.</li>
                    <li><span style={{ color: 'var(--primary-color)', width: '120px', display: 'inline-block' }}>cowsay [msg]</span> A cow says your message.</li>
                    <li><span style={{ color: 'var(--primary-color)', width: '120px', display: 'inline-block' }}>projects</span> View my projects.</li>
                    <li><span style={{ color: 'var(--primary-color)', width: '120px', display: 'inline-block' }}>experience</span> List my work experience.</li>
                    <li><span style={{ color: 'var(--primary-color)', width: '120px', display: 'inline-block' }}>skills</span> List of my technical skills.</li>
                    <li><span style={{ color: 'var(--primary-color)', width: '120px', display: 'inline-block' }}>education</span> My educational background.</li>
                    <li><span style={{ color: 'var(--primary-color)', width: '120px', display: 'inline-block' }}>contact</span> Display contact form.</li>
                    <li><span style={{ color: 'var(--primary-color)', width: '120px', display: 'inline-block' }}>cv</span> Open my resume.</li>
                    <li><span style={{ color: 'var(--primary-color)', width: '120px', display: 'inline-block' }}>email</span> Send me an email.</li>
                    <li><span style={{ color: 'var(--primary-color)', width: '120px', display: 'inline-block' }}>socials</span> Show social media links.</li>
                    <li><span style={{ color: 'var(--primary-color)', width: '120px', display: 'inline-block' }}>theme</span> Toggle light/dark theme.</li>
                    <li><span style={{ color: 'var(--primary-color)', width: '120px', display: 'inline-block' }}>clear</span> Clear the terminal.</li>
                    <li><span style={{ color: 'var(--primary-color)', width: '120px', display: 'inline-block' }}>cat [file]</span> Show details of a file.</li>
                </ul>
            </div>
        ),
        whoami: () => 'Yousef Mardrosyan: A passionate Full-Stack Developer dedicated to building innovative and user-friendly web applications.',
        date: () => new Date().toString(),
        quote: () => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            return `"${quotes[randomIndex]}"`;
        },
        cowsay: (args) => {
            const message = args.join(' ') || "Moo-ve along, nothing to see here!";
            const topBar = ' ' + '_'.repeat(message.length + 2);
            const bottomBar = ' ' + '-'.repeat(message.length + 2);
            
            const bubble = `${topBar}\n< ${message} >\n${bottomBar}`;
            
            const cow = `
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`;
            return (
                <pre style={{ color: 'var(--text-color)' }}>
                    {`${bubble}${cow}`}
                </pre>
            )
        },
        projects: () => <Projects />,
        experience: () => (
            <div>
                {experienceData.map(exp => <p key={exp.file}>{exp.file}</p>)}
                <br/>
                <p>Type "cat [filename]" to see details.</p>
            </div>
        ),
        skills: () => <Skills />,
        education: () => <Education />,
        contact: () => <ContactForm onSubmitted={(message) => setHistory(prev => [...prev, { type: 'output', text: message }])} />,
        theme: () => {
            toggleTheme();
            return 'Theme toggled.';
        },
        linkedin: () => {
            window.open('https://www.linkedin.com/in/yousef-mardrosyan-3b38b4268/', '_blank');
            return 'Opening LinkedIn...';
        },
        github: () => {
            window.open('https://github.com/azvali', '_blank');
            return 'Opening GitHub...';
        },
        cv: () => {
            window.open(resumePDF, '_blank');
            return 'Opening Resume...';
        },
        email: () => {
            const email = 'yousefm2787@gmail.com';
            window.location.href = `mailto:${email}`;
            return `Opening mail client for ${email}...`;
        },
        socials: () => (
            <div>
                <p><a href="https://www.linkedin.com/in/yousef-mardrosyan-3b38b4268/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                <p><a href="https://github.com/azvali" target="_blank" rel="noopener noreferrer">GitHub</a></p>
            </div>
        ),
        cat: (args) => {
            const fileName = args[0];
            if (!fileName) {
                return "Usage: cat [filename]";
            }
            const experience = experienceData.find(exp => exp.file === fileName);
            if (!experience) {
                return `File not found: ${fileName}`;
            }
            return <ExperienceDetail experience={experience} />;
        },
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        terminalBodyRef.current?.scrollTo(0, terminalBodyRef.current.scrollHeight);
    }, [history]);

    useEffect(() => {
        terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    useEffect(() => {
        setPromptReady(false);
        setHistory([]);
    
        const introMessages = [
            { text: 'Booting YM-DOS v2.4...', delay: 500 },
            { text: 'Welcome, Recruiter!', delay: 1000 },
            { text: 'Type "help" to see a list of available commands.', delay: 1500 },
        ];
    
        let cumulativeDelay = 0;
        const timeouts = [];
        introMessages.forEach((msg, index) => {
            cumulativeDelay += msg.delay;
            const timeoutId = setTimeout(() => {
                setHistory(prev => [...prev, { type: 'output', text: msg.text }]);
                if (index === introMessages.length - 1) {
                    setTimeout(() => setPromptReady(true), 500);
                }
            }, cumulativeDelay);
            timeouts.push(timeoutId);
        });
        introTimeoutsRef.current = timeouts;
    
        return () => {
            introTimeoutsRef.current.forEach(clearTimeout);
        };
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            introTimeoutsRef.current.forEach(clearTimeout);
            const inputVal = input.trim();
            const [command, ...args] = inputVal.split(/\s+/);
            const lowerCaseCommand = command.toLowerCase();

            if (lowerCaseCommand) {
                setCommandHistory(prev => [inputVal, ...prev.filter(c => c !== inputVal)]);
            }

            if (lowerCaseCommand === 'clear') {
                setHistory([]);
            } else {
                const newHistory = [...history, { type: 'command', text: inputVal }];
                if (lowerCaseCommand) {
                    const commandFunc = commands[lowerCaseCommand];
                    const output = commandFunc ? commandFunc(args) : `Command not found: ${lowerCaseCommand}`;
                    if (output) {
                        newHistory.push({ type: 'output', text: output });
                    }
                }
                setHistory(newHistory);
            }
            
            setPromptReady(true);
            setInput('');
            setHistoryIndex(-1);
        } else if (e.key === 'ArrowUp') {
            if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
                const newIndex = historyIndex + 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            }
        } else if (e.key === 'ArrowDown') {
            if (historyIndex > 0) {
                const newIndex = historyIndex - 1;
                setHistoryIndex(newIndex);
                setInput(commandHistory[newIndex]);
            } else {
                setHistoryIndex(-1);
                setInput('');
            }
        }
    };

    const toggleMaximize = () => {
        if (isMaximized) {
            setRndState({
                width: 900,
                height: 500,
                x: window.innerWidth / 2 - 450,
                y: window.innerHeight / 2 - 250,
            });
        } else {
            setRndState({ width: '100%', height: '100%', x: 0, y: 0 });
        }
        setIsMaximized(!isMaximized);
    };

    const handleTerminalClick = (e) => {
        const targetTagName = e.target.tagName;
        if (targetTagName !== 'INPUT' && targetTagName !== 'TEXTAREA' && targetTagName !== 'BUTTON' && !e.target.closest('a')) {
            inputRef.current?.focus();
        }
    };

    return (
        <Rnd
            size={{ width: rndState.width, height: rndState.height }}
            position={{ x: rndState.x, y: rndState.y }}
            onDragStop={(e, d) => { if (!isMaximized) setRndState({ ...rndState, x: d.x, y: d.y })}}
            onResizeStop={(e, direction, ref, delta, position) => {
                setRndState({
                    width: ref.offsetWidth,
                    height: ref.offsetHeight,
                    ...position,
                });
            }}
            minWidth={350}
            minHeight={200}
            dragHandleClassName="terminal-header"
            bounds="parent"
            disableDragging={isMaximized}
        >
            <div className="terminal-container" onClick={handleTerminalClick}>
                <div className="terminal-header">
                    <div className="terminal-title">yousef-mardrosyan -- ~</div>
                    <div className="terminal-buttons">
                        <button className="terminal-button" onClick={toggleMaximize} aria-label={isMaximized ? 'Restore' : 'Maximize'}>
                            {isMaximized ? (
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <title>Restore</title>
                                    <rect x="1.5" y="4.5" width="8" height="8" stroke="currentColor" strokeWidth="2"/>
                                    <path d="M4.5 4.5V2.5C4.5 2.22386 4.72386 2 5 2H11.5C11.7761 2 12 2.22386 12 2.5V9H11" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            ) : (
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <title>Maximize</title>
                                    <rect x="1.5" y="1.5" width="9" height="9" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className="terminal-body" ref={terminalBodyRef} onClick={handleTerminalClick}>
                    {history.map((item, index) => (
                        <div key={index} className={item.type}>
                            {item.type === 'command' ? (
                                <div className="input-line">
                                    <span className="prompt">root@yousef:~$</span>
                                    <span>{item.text}</span>
                                </div>
                            ) : (
                                item.text
                            )}
                        </div>
                    ))}
                    {promptReady && (
                        <div className="input-line" onClick={() => inputRef.current?.focus()}>
                            <span className="prompt">root@yousef:~$</span>
                            <span className="input-text">{input}</span>
                            <span className="blinking-cursor" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                disabled={!promptReady}
                                autoFocus
                                style={{ position: 'absolute', top: '-9999px', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
                            />
                        </div>
                    )}
                    <div ref={terminalEndRef} />
                </div>
            </div>
        </Rnd>
    );
};

export default Terminal; 