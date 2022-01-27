import React from 'react';

const Topic = ({topic}) => {
    const phrasesNodes = topic.phrases.map(phrase=>{
        return (<>
        <div className='phrases-container'>
            <p>{phrase.phrase}</p>
            <h5>{phrase.translation}</h5>
            </div>
            {/* <p>{phrase.audio}</p> */}
        </>)
    });

    return(        
        <>
        <h1>{topic.name}</h1>
        {phrasesNodes}
        </> 

    )
};

export default Topic;