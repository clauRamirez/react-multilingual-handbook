import React, { useState } from 'react';
import TopicButton from './TopicButton';
import Topic from './Topic';

 const TopicsList = ({topics}) => {
const [selectedTopic,setSelectedTopic] = useState(null)
    
const onTopicClick = (topic) => {
  setSelectedTopic(topic)
}

const topicButtonNodes = topics.map((topic, index) => {
        return <TopicButton key={index} topic = {topic} onTopicClick={onTopicClick} />

    })

  return (
    <>
    {!selectedTopic ? <h1>Choose a topic: </h1> : null}

    <div className='flex-wrap'>

        {!selectedTopic ? topicButtonNodes : null}

    </div>
        {selectedTopic ? <Topic topic={selectedTopic} /> : null}
    </>
  );
};

export default TopicsList;
