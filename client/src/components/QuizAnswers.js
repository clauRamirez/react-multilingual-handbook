import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const QuizAnswers = ({ answer,resetColour,setShowButton,setResetColour}) => {
   
    const [colour, setColour] = useState("primary");
    

    useEffect(() => {
        setColour("primary")
        setResetColour(false)
      },[resetColour])
    
    const handleClick = (event) => {
    
      if (event.target.value === "true") {
            
            setColour("success");
            setShowButton(true)
            
        } else if (event.target.value === "false") {
            setColour("danger");
        }
    };



    return (
        <div className="answers-container">
            <Button
                variant={colour}
                onClick={handleClick}
                value={answer.isCorrect}
            >
                {answer.text}
            </Button>
        </div>
    );
};

export default QuizAnswers;
