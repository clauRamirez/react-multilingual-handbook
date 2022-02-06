import React, { useState } from "react";
import LanguageMainPageButtons from "./LanguageMainPageButtons";
import QuizList from "./QuizList";
import TopicsList from "./TopicsList";

const MainPage = ({ selectedLanguage }) => {
    const [selectedComponent, setSelectedComponent] = useState(null);

    const onClickSelect = (value) => {
        setSelectedComponent(value);
    };

    const [selectedComponent, setSelectedComponent] = useState(null);

    const onClickSelect = (value) => {
        setSelectedComponent(value);
    };
    const onClickBack = (event) => {
        setSelectedComponent(event.target.value);
    };

    return (
        <>
            {selectedComponent ? (
                <Button
                    className="btn-white-bg btn-back"
                    value={null}
                    onClick={onClickBack}
                >
                    Back
                </Button>
            ) : null}
            <div className="home-page-container">
                {!selectedComponent ? (
                    <LanguageMainPageButtons onClickSelect={onClickSelect} />
                ) : null}
                {selectedComponent === "quiz" ? (
                    <QuizList quizzes={selectedLanguage.quizzes} />
                ) : null}
                {selectedComponent === "topics" ? (
                    <TopicsList topics={selectedLanguage.topics} />
                ) : null}
            </div>
        </>
    );
};

export default MainPage;
