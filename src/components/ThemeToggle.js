import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaRegSun, FaRegMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className="theme-toggle-btn">
            {theme === 'dark' ? <FaRegSun /> : <FaRegMoon />}
        </button>
    );
};

export default ThemeToggle; 