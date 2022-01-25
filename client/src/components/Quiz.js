import React, {useState} from "react";
import QuizAnswers from "./QuizAnswers";
const Quiz = ({quiz,currentQuiz,onClickNextQuiz}) => {
  const[currentScore,setCurrentScore] = useState(0) 
  
  
  
  const handleClick =()=>{
      onClickNextQuiz()
    }                   
  const currentQuizData = quiz.quiz[currentQuiz]
    
    const answersNodes = currentQuizData.answers.map((answer,index)=>{
      return <QuizAnswers answer ={answer} key={index}/>
    })

    // const handleCLick =(event)=>{
    //   if(event.target.value == true){
    //       setCurrentScore(score)         

      
  
    
    return (
        <>
            <p> Quiz number: {quiz.id}</p>
            <p>Question: {currentQuizData.question} </p>
            {answersNodes}
            <p onClick={handleClick}>next</p>
            <p>score:{currentScore}/5</p>
        </>
    )
}

export default Quiz;