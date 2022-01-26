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
            <div className="quiz quiz-title"> Quiz number: {quiz.id}</div>
            <div>Question: {currentQuizData.question} </div>
            {answersNodes}
            {/* <div>Score:{currentScore}/24</div> */}
            {showButton ? <Button variant="primary" className="btn-next" onClick={handleClick}>Next</Button>: null}
        </>
    )
}

export default Quiz;