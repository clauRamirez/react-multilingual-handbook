import React, { useEffect, useState } from 'react';
import LanguageSelector from '../components/LanguageSelector';
import MainPage from '../components/LanguageMainPage';
import LanguagesService from '../services/LanguagesServices';
import Container from 'react-bootstrap/esm/Container';



const LanguagesContainer = () => {
    
    const [allData,setAllData] = useState([])
    const [selectedLanguage,setSelectedLanguage] = useState(null)
    const [UserData, setUserData] = useState([])
  
useEffect(()=>{
      LanguagesService.getLanguages()
    .then(allData => setAllData(allData))
},[])

const onClickLanguage = (language) =>{
   setSelectedLanguage(language)
}

const goMainPage = () =>{
    setSelectedLanguage(null)
}


  
    return (
  
<Container fluid='md' className='main-container'>
        
    <div className='lang-image-container'>   
        {!selectedLanguage ? <LanguageSelector allData={allData} onClickLanguage={onClickLanguage}/> : null}
    </div>
    <div className='main-page-container'> 
        {selectedLanguage ? <MainPage  selectedLanguage={selectedLanguage}/> : null }

    </div>
</Container>
 
  );
};


export default LanguagesContainer;
