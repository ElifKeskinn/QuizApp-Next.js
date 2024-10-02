"use client";

import React, { useEffect } from 'react';
import styles from '../styles/themeToggle.css';

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]); 

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </div>
  );
};

export default ThemeToggle;
