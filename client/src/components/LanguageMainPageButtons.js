import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const LanguageMainPageButtons = ({ onClickSelect }) => {
    const handleClick = (event) => {
        onClickSelect(event.target.getAttribute("data-value"));
    };

    return (
        <>
            <h1>Let's start: </h1>

            <div className="flex-wrap">
                <Card className="language-card" onClick={handleClick}>
                    <Card.Img
                        data-value="topics"
                        variant="top"
                        src="https://images.pexels.com/photos/4340785/pexels-photo-4340785.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    />
                    <Card.Body data-value="topics">
                        <Card.Text data-value="topics">Topics</Card.Text>
                    </Card.Body>
                </Card>

                <Card className="language-card" onClick={handleClick}>
                    <Card.Img
                        data-value="quiz"
                        variant="top"
                        src="https://images.pexels.com/photos/267705/pexels-photo-267705.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    />
                    <Card.Body data-value="quiz">
                        <Card.Text data-value="quiz">Quizzes</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};

export default LanguageMainPageButtons;
