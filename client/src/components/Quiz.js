<<<<<<< HEAD
import React, {useState} from "react";
import Button from "react-bootstrap/esm/Button";
import QuizAnswers from "./QuizAnswers";
const Quiz = ({quiz,currentQuiz,onClickNextQuiz}) => {
  const [currentScore,setCurrentScore] = useState(12) 
  const [showButton,setShowButton]  = useState(false)
  const [resetColour,setResetColour] = useState(false)
  const [showScore,setShowScore] = useState(false)
  
  
  
  const handleClick =()=>{
      
      onClickNextQuiz
      (setShowButton(false))
      setResetColour(true)
      
    }                     
  const currentQuizData = quiz.quiz[currentQuiz]
    
    const answersNodes = currentQuizData.answers.map((answer,index)=>{
      return <QuizAnswers answer ={answer} key={index} setResetColour ={setResetColour} resetColour ={resetColour} setShowButton={setShowButton} currentQuiz={currentQuiz} setCurrentScore={setCurrentScore} currentScore ={currentScore} setShowScore ={setShowScore}/>
    })

    // const handleCLick =(event)=>{
    //   if(event.target.value == true){
    //       setCurrentScore(score)         

      
  
    
    return (
        <>
            <p> Quiz number: {quiz.id}</p>
            <p>Question: {currentQuizData.question} </p>
            {answersNodes}
            {showButton ? <Button variant="primary" onClick={handleClick}>next</Button>: null}
            <p>score:{currentScore}/24</p>
        </>
    )
}
=======
import React from 'react';

 const Quiz = () => {
  return (
    <div>
    
    </div>
  );
};

>>>>>>> 8e29c644edeb2248469459ae3305a693b9a702ce

export default Quiz;