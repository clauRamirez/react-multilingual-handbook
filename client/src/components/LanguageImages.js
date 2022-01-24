import React from 'react';

export const LanguageImages = ({languageData,onClickLanguage}) => {
  
    const handleClick =()=>{
        onClickLanguage(languageData)
    }
    
    return (
      <div>
           <img onClick={handleClick} className='img' src={languageData.image}  alt= "Movie Poster"/>
      </div>
  )
};

export default LanguageImages;
