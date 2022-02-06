import React, { useEffect, useState } from "react";
import LanguageSelector from "../components/LanguageSelector";
import MainPage from "../components/LanguageMainPage";
import LanguagesService from "../services/LanguagesServices";
import Container from "react-bootstrap/Container";

const LanguagesContainer = () => {
    const [allData, setAllData] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const [UserData, setUserData] = useState([]);

    useEffect(() => {
        LanguagesService.getLanguages().then((allData) => setAllData(allData));
    }, []);

    const onClickLanguage = (language) => {
        setSelectedLanguage(language);
    };

    const goMainPage = () => {
        setSelectedLanguage(null);
    };

    return (
        <Container fluid="md" className="main-container">
            {!selectedLanguage ? (
                <LanguageSelector
                    allData={allData}
                    onClickLanguage={onClickLanguage}
                />
            ) : null}
            {selectedLanguage ? (
                <MainPage selectedLanguage={selectedLanguage} />
            ) : null}
        </Container>
    );
};

export default LanguagesContainer;
