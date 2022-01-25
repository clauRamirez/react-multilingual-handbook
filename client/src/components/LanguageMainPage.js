import React, { useState } from 'react';
import LanguageMainPageButtons from './LanguageMainPageButtons';
import QuizList from './QuizList';
import TopicsList from './TopicsList';


const MainPage = ({selectedLanguage}) => {

        const [selectedComponent,setSelectedComponent] = useState(null)

        const handleClick =(event) =>{
            setSelectedComponent(event.target.value)
        }
        
        
        return (
        <div className='home-page-container'>
    
        <button value={null} onClick={handleClick}></button>
        {!selectedComponent ? <LanguageMainPageButtons handleClick={handleClick}/> : null}
        {selectedComponent === "quiz" ? <QuizList quizzes ={selectedLanguage.quizzes}/> : null }
        {selectedComponent === "topics" ? <TopicsList topics = {selectedLanguage.topics}/> : null }
         </div>
    );
};

export default MainPage;