import React, { useState } from 'react';
import TopicButton from './TopicButton';

 const TopicsList = ({topics}) => {
const [selectedTopic,setSelectedTopic] = useState(null)
    
const onTopicClick = (topic) => {
  setSelectedTopic(topic)
}

const topicButtonNodes = topics.map((topic, index) => {
        return <TopicButton key={index} topic = {topic} onTopicClick={onTopicClick} />

    })

  return (
    <div>
        {!selectedTopic ? topicButtonNodes : null}
        {/* {selectedTopic ? <Topic topic={selectedTopic} /> : null} */}

    </div>
  );
};

export default TopicsList;
