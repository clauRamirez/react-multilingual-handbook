import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const QuizAnswers = ({ answer }) => {
    const [colour, setColour] = useState("primary");

    const handleClick = (event) => {
        console.log(event.target.value);

        if (event.target.value === "true") {
            setColour("success");
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
