import React from 'react';

const LanguageMainPageButtons = ({handleClick}) => {
  

  return (
      <>
        <button value="topics" onClick={handleClick}>Topics</button>
        <button value="quiz" onClick={handleClick} >Quizz</button>
      </>
  )
};

export default LanguageMainPageButtons;
