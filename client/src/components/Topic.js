import React from 'react';

export const Topic = ({topic, onTopicClick}) => {

  const handleClick = () => {
    onTopicClick(topic)
  }
  return (
    <div>
    <p onClick={handleClick} >{topic.name}</p>
    </div>
    );
};

export default Topic;
