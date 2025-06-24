import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import Terminal from '../components/Terminal';
import MatrixBackground from '../components/MatrixBackground';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <ThemeProvider>
      <main className="portfolio-container">
        <MatrixBackground />
        <Terminal />
      </main>
    </ThemeProvider>
  );
};

export default Portfolio; 