import React from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import Terminal from '../components/Terminal';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <ThemeProvider>
      <main className="portfolio-container">
        <Terminal />
      </main>
    </ThemeProvider>
  );
};

export default Portfolio; 