import React from 'react';

export const QuizButton = ({quiz, onQuizClick}) => {

  const handleClick = () => {
    onQuizClick(quiz)
  }
  return (
    <div>
    <p onClick={handleClick} > Quiz {quiz.id}</p>
    </div>
    );
};

export default QuizButton;