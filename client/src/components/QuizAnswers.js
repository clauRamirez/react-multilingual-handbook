import React from 'react';

const QuizAnswers = ({answer}) => {
    


   
    return( 
    <div>
        {answer.text}
        {/* <button onClick={handleCLick} value={answer.isCorrect}/> */}

        
    </div>
  );
};

export default QuizAnswers;
