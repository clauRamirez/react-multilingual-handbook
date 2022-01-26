import React from 'react';
import Card from 'react-bootstrap/Card';


export const TopicButton = ({topic, onTopicClick}) => {

  const handleClick = () => {
    onTopicClick(topic)
  }
  return (

  <Card className='language-card' onClick={handleClick} >
    <Card.Img  variant="top" src="https://images.pexels.com/photos/4340785/pexels-photo-4340785.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
    <Card.Body >
      <Card.Text >
      {topic.name}
      </Card.Text>
    </Card.Body>
  </Card>
    );
};

export default TopicButton;
