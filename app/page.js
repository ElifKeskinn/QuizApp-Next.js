"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ThemeToggle from '@/app/components/ThemeToggle'; 
import './styles/quizPage.css';
import './globals.css';

export default function HomePage() {
  const [selectedTopic, setSelectedTopic] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false); 
  const router = useRouter();

  const handleStartQuiz = (topic) => {
    setSelectedTopic(topic);
    router.push(`/quiz/${topic}`);
  };

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setIsDarkMode(savedTheme === 'dark');
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      import('./styles/dark-theme.css');
    } else {
      import('./styles/light-theme.css');
    }
  }, [isDarkMode]);

  return (
    <div className={`StartPage ${isDarkMode ? 'dark' : 'light'}`}>
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="leftSide">
        <h1 className="welcome">Frontend Sınavına</h1>
        <h1 className="front">Hoşgeldiniz!</h1>
        <p className="subtitle">Başlamak için bir konu seçin:</p>
      </div>
      <div className="rightSide">
        <div className="topicBtns">
          <button onClick={() => handleStartQuiz('html')}>
            <Image src="/img/html.png" alt="HTML" width={24} height={24} /> HTML
          </button>
          <button onClick={() => handleStartQuiz('javascript')}>
            <Image src="/img/js.png" alt="JavaScript" width={24} height={24} /> JavaScript
          </button>
          <button onClick={() => handleStartQuiz('css')}>
            <Image src="/img/css.png" alt="CSS" width={24} height={24} /> CSS
          </button>
          <button onClick={() => handleStartQuiz('acces')}>
            <Image src="/img/acces.png" alt="Accessibility" width={24} height={24} /> Accessibility
          </button>
        </div>
      </div>
    </div>
  );
}
