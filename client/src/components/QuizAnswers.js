import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const QuizAnswers = ({ answer,resetColour,setShowButton,setResetColour,currentQuiz,setShowScore,setCurrentScore,currentScore}) => {
   
    const [colour, setColour] = useState("primary");
    
    const [clickable,setClickable] = useState(false)
    const [showConfetti,setShowConfetti] = useState(null)
    const [allClickable,setAllclickable] = useState(false)
    const { width, height } = useWindowSize()
    const confetti =<Confetti width={width} height={height} />
    
   


   const button =()=>{return( <Button
   className = 'btn-long'

   variant={colour}
   onClick={handleClick}
   value={answer.isCorrect}    
   disabled = {clickable}
   >
   {answer.text}
   </Button>)}

    
const answersDisabled =()=>{return( <Button
    variant={colour}
    onClick={handleClick}
    value={answer.isCorrect}    
    disabled   
    >
    {answer.text}
    </Button>)}



      
    useEffect(() => {
        setColour("primary")
        setResetColour(false)
        setClickable(false)
      },[resetColour])
    
    const handleClick = (event) => {
        setClickable(true)
        if (currentQuiz == 3){
            if(event.target.value === "true") {
                setColour("success");
                setCurrentScore(currentScore + 3)
                setShowScore(true)
                setShowConfetti(true)
            

            } else if (event.target.value === "false") {
                setColour("danger");
                setCurrentScore(currentScore -1 )
            }
            setShowButton(false)
            
           
         }else if (event.target.value === "true") {
            setColour("success");
            setShowButton(true)
            setCurrentScore(currentScore + 3)
            
        } else if (event.target.value === "false") {
            setColour("danger");
            setCurrentScore(currentScore -1 )
            
            
        }
    };

    
    
    return (
        <div className="answers-container">
            <Button
   className = 'btn-long'

   variant={colour}
   onClick={handleClick}
   value={answer.isCorrect}    
   disabled = {clickable}
   >
   {answer.text}
   </Button>
            {showConfetti ? confetti : null }
        </div>
    );
};

export default QuizAnswers;
