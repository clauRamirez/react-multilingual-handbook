import React from "react";
import Card from "react-bootstrap/Card";

export const TopicButton = ({ topic, onTopicClick }) => {
    const handleClick = () => {
        onTopicClick(topic);
    };
    return (
        <Card className="language-card" onClick={handleClick}>
            <Card.Img variant="top" src={topic.image} />
            <Card.Body>
                <Card.Text>{topic.name}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default TopicButton;
