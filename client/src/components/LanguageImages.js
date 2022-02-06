import React from "react";
import Card from "react-bootstrap/Card";

export const LanguageImages = ({ languageData, onClickLanguage }) => {
    const handleClick = () => {
        onClickLanguage(languageData);
    };

    return (
        <Card className="language-card" onClick={handleClick}>
            <Card.Img variant="top" src={languageData.image} />
            <Card.Body>
                <Card.Text>{languageData.name}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default LanguageImages;
