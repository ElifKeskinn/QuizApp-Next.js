"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';  
import './styles/quizPage.css';  

export default function HomePage() {
  const [selectedTopic, setSelectedTopic] = useState('');
  const router = useRouter();

  const handleStartQuiz = (topic) => {
    setSelectedTopic(topic);
    router.push(`/quiz/${topic}`);
  };

  return (
    <div className='StartPage'>
      <h1>Frontend Sınavına Hoşgeldiniz!</h1>
      <p>Başlamak için bir konu seçin:</p>
      <div className="topic-buttons">
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
          <Image src="/img/acces.png" alt="acces" width={24} height={24} /> Accessibility
        </button>
      </div>
    </div>
  );
}
