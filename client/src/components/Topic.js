import React from 'react';

const Topic = ({topic}) => {
    const phrasesNodes = topic.phrases.map(phrase=>{
        return (<>
            <p>{phrase.phrase}</p>
            <p>{phrase.translation}</p>
            <p>{phrase.audio}</p>
        </>)
    })

    return(
        <>
        <p>{topic.name}</p>
        {phrasesNodes}
        </>
    )
};

export default Topic;