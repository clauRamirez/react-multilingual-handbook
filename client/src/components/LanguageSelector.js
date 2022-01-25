import React from 'react';
import { getLanguages } from '../services/LanguagesServices';
import LanguageImages from './LanguageImages';
import UserHomePage from './UserLogin';


const LanguageSelector = ({allData,onClickLanguage}) => {
    
    const imageNodes = allData.map(languageData => { 
        return <LanguageImages onClickLanguage={onClickLanguage} languageData = {languageData} key = {languageData._id} />
    })


    return( 
  <div className='card'>
    
    {imageNodes}
  </div> 
  );
};
export default LanguageSelector;

