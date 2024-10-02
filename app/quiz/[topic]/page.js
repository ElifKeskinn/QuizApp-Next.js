"use client";

import React, { useState, useEffect } from 'react';
import Question from '../../components/Question';
import ProgressBar from '../../components/ProgressBar';
import ThemeToggle from '../../components/ThemeToggle';

const QuizPage = ({ params }) => {
  const { topic } = params; 
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/assets/questions/${topic}.json`)
      .then(response => response.json())
      .then(data => {
        setQuestions(data.questions);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
        setLoading(false);
      });
  }, [topic]);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    setIsSubmitted(true);

    const question = questions[currentQuestionIndex];
    if (selectedAnswer === question.answer) {
      setCorrectAnswersCount(prevCount => prevCount + 1);
    }

    setTimeout(() => {
      setIsSubmitted(false);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        setSelectedAnswer(null);
      } else {
        setQuizFinished(true);
      }
    }, 1000);
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
      import('../../styles/dark-theme.css');
    } else {
      import('../../styles/light-theme.css');
    }
  }, [isDarkMode]);

  const renderResults = () => (
    <div className="results-page">
      <h1>Quiz Completed</h1>
      <h2>Correct Answers: {correctAnswersCount} / {questions.length}</h2>
      <button onClick={() => window.location.href = '/'}>Go to Home</button>
    </div>
  );

  const renderQuiz = () => (
    <>
      <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="selected-topic">
        <img src={`/img/${topic}.png`} alt={topic} className="topic-image" />
        <h2>{topic}</h2>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {questions.length > 0 && (
            <div>
              <Question
                question={questions[currentQuestionIndex]}
                onAnswerSelect={handleAnswerSelection}
                selectedAnswer={selectedAnswer}
                onSubmitAnswer={handleSubmitAnswer}
                isSubmitted={isSubmitted}
              />
              <ProgressBar progress={(currentQuestionIndex + 1) / questions.length * 100} />
            </div>
          )}
        </div>
      )}
    </>
  );

  return (
    <div className={`quiz-page ${isDarkMode ? 'dark' : 'light'}`}>
      {quizFinished ? renderResults() : renderQuiz()}
    </div>
  );
};

export default QuizPage;
