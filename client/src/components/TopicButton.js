import React from "react";

export const TopicButton = ({ topic, onTopicClick }) => {
    const handleClick = () => {
        onTopicClick(topic);
    };
    return (
        <div>
            <p onClick={handleClick}>{topic.name}</p>
        </div>
    );
};

export default TopicButton;
