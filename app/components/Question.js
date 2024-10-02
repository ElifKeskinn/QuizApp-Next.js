import React from 'react';


const Question = ({ question, onAnswerSelect, selectedAnswer, onSubmitAnswer, isSubmitted }) => (
  <div className="question">
    <h2>{question.question}</h2>
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswerSelect(option)}
          style={{
            border: isSubmitted
              ? option === question.answer
                ? '2px solid green'
                : '2px solid red'
              : selectedAnswer === option
                ? '3px solid #A729F5'
                : '1px solid #3e3d3d'
          }}
        >
          {option}
        </button>
      ))}
      <button className='submit-button' onClick={onSubmitAnswer}>Cevapla</button>

    </div>
  </div>
);

export default Question;
