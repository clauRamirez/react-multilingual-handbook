import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const QuizAnswers = ({
    answer,
    resetColour,
    setShowButton,
    setResetColour,
    currentQuiz,
    setShowScore,
    setCurrentScore,
    currentScore,
}) => {
    const [colour, setColour] = useState("primary");
    const [clickable, setClickable] = useState(false);

    useEffect(() => {
        setColour("primary");
        setResetColour(false);
        setClickable(false);
    }, [resetColour]);

    const handleClick = (event) => {
        setClickable(true);
        if (currentQuiz == 3) {
            if (event.target.value === "true") {
                setColour("success");
                setCurrentScore(currentScore + 3);
            } else if (event.target.value === "false") {
                setColour("danger");
                setCurrentScore(currentScore - 1);
            }
            setShowButton(false);
            setShowScore(true);
        } else if (event.target.value === "true") {
            setColour("success");
            setShowButton(true);
            setCurrentScore(currentScore + 3);
        } else if (event.target.value === "false") {
            setColour("danger");
            setCurrentScore(currentScore - 1);
        }
    };

    return (
        <div className="answers-container">
            <Button
                variant={colour}
                onClick={handleClick}
                value={answer.isCorrect}
                disabled={clickable}
            >
                {answer.text}
            </Button>
        </div>
    );
};

export default QuizAnswers;
