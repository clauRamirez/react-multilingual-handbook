import React from 'react';

const LanguageMainPageButtons = ({handleClick}) => {
  

  return (
      <>
        <button value="topics" onClick={handleClick}>Topics</button>
        <button value="quiz" onClick={handleClick} >Quiz</button>
      </>
  )
};

export default LanguageMainPageButtons;