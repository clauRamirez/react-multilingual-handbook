import React from 'react';
import Card from 'react-bootstrap/Card';

const Topic = ({topic}) => {
    const phrasesNodes = topic.phrases.map(phrase=>{
        return (<>
            <p>{phrase.phrase}</p>
            <p>{phrase.translation}</p>
            <p>{phrase.audio}</p>
        </>)
    });

    return(
//        <> <h1>{topic.name}</h1>
//     <Card className='language-card'>
//     <Card.Img variant="top" src={phrasesNodes} />
//     <Card.Body>
//       <Card.Text>
//       {phrasesNodes}
//       </Card.Text>
//     </Card.Body>
//   </Card>
//         </>


        
        <>
        <h1>{topic.name}</h1>
        {phrasesNodes}
        </> 

    )
};

export default Topic;