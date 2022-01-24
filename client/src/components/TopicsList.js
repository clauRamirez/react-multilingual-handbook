import React, { useState } from 'react';
import Topic from './Topic';

 const TopicsList = ({topics}) => {
const [selectedTopic,setSelectedTopic] = useState(null)
    
const topicNodes = topics.map(topic => {
        console.log(topic)
        return <Topic topic ={topic}  />

    })

  return (
    <div>
        {topicNodes}
    </div>
  );
};

export default TopicsList;
