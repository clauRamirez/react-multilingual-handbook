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

    return <div className="flex-wrap">{imageNodes}</div>;
};
export default LanguageSelector;
