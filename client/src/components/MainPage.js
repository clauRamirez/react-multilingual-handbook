import React from 'react';


const MainPage = ({selectedLanguage,goMainPage}) => {

   return (
    <div className='home-page-container'>
    
    <img src={selectedLanguage.image}/>
    
   
    </div>
    );
};

export default MainPage;