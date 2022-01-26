import React from 'react';
import { getLanguages } from '../services/LanguagesServices';
import LanguageImages from './LanguageImages';
import UserHomePage from './UserLogin';


const LanguageSelector = ({allData,onClickLanguage}) => {
    
    const imageNodes = allData.map(languageData => { 
        return <LanguageImages onClickLanguage={onClickLanguage} languageData = {languageData} key = {languageData._id} />
    })


    return( 
      <>
      <h1>Let's choose the language:</h1>      
  <div className='flex-wrap'>
    
    {imageNodes}
  </div> 
  </>
  );
};
export default LanguageSelector;

