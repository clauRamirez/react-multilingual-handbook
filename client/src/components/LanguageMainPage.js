import React, { useState } from 'react';
import LanguageMainPageButtons from './LanguageMainPageButtons';
import Quiz from './Quiz';
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
        
    {selectedComponent === "quiz" ? <Quiz quizes ={selectedLanguage.quiz}/> : null }
    {selectedComponent === "topics" ? <TopicsList topics = {selectedLanguage.topics}/> : null }
    


    <img src={selectedLanguage.image}/>
    
   
    </div>
    );
};

export default MainPage;