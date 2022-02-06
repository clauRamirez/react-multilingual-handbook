import React from "react";
import LanguageImages from "./LanguageImages";

const LanguageSelector = ({ allData, onClickLanguage }) => {
    const imageNodes = allData.map((languageData) => {
        return (
            <LanguageImages
                onClickLanguage={onClickLanguage}
                languageData={languageData}
                key={languageData._id}
            />
        );
    });

    return (
        <>
            <h1>Let's choose a language:</h1>
            <div className="flex-wrap">{imageNodes}</div>
        </>
    );
};
export default LanguageSelector;
