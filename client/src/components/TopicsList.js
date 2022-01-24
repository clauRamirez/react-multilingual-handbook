import React, { useState } from 'react';
import Topic from './Topic';

 const TopicsList = ({topics}) => {
const [selectedTopic,setSelectedTopic] = useState(null)
    
const onTopicClick = (topic) => {
  setSelectedTopic(topic)
}

const topicNodes = topics.map(topic => {
        return <Topic topic = {topic} onTopicClick={onTopicClick} />

    })

  return (
    <div>
        {!selectedTopic ? topicNodes : null}
        {selectedTopic ? <Topic topic={selectedTopic} /> : null}

    </div>
  );
};

export default TopicsList;
