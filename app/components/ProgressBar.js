'use client';
import React from 'react';

const ProgressBar = ({ progress }) => {
  console.log(`ProgressBar received progress: ${progress}%`); // Debugging

  return (
    <div style={{
      width: '100%',
      backgroundColor: '#e0e0e0',
      borderRadius: '8px',
      overflow: 'hidden',
      height: '20px',
      marginTop: '20px'
    }}>
      <div style={{
        height: '100%',
        backgroundColor: '#76c7c0',
        width: `${progress}%`,
        transition: 'width 0.5s ease-in-out'
      }}></div>
    </div>
  );
};

export default ProgressBar;
