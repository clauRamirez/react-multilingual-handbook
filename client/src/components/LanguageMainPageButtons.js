import React from "react";
import Card from "react-bootstrap/Card";

const LanguageMainPageButtons = ({ onClickSelect }) => {
    const handleClick = (event) => {
        console.log(event.target);
        onClickSelect(event.target.getAttribute("data-value"));
        console.log("data-value");
    };

    return (
        <div className="flex-wrap">
            <Card className="language-card" onClick={handleClick}>
                <Card.Img
                    data-value="topics"
                    variant="top"
                    src="https://images.pexels.com/photos/4778412/pexels-photo-4778412.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                />
                <Card.Body data-value="topics">
                    <Card.Text data-value="topics">Topics</Card.Text>
                </Card.Body>
            </Card>

            <Card className="language-card" onClick={handleClick}>
                <Card.Img
                    data-value="quiz"
                    variant="top"
                    src="https://images.pexels.com/photos/4778412/pexels-photo-4778412.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                />
                <Card.Body data-value="quiz">
                    <Card.Text data-value="quiz">Quizzes</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default LanguageMainPageButtons;
