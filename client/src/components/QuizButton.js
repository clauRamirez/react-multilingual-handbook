import React from 'react';
import Card from 'react-bootstrap/Card';
export const QuizButton = ({quiz, onQuizClick}) => {
  
  const handleClick = () => {
    onQuizClick(quiz)
  }
  
  return (
           
    <Card className='quiz-card language-card ' onClick={handleClick} >
    <Card.Img className="card-border" variant="top" src={"https://bba-girona.org/wp-content/uploads/2017/03/quiz-2074324_1280.png"}/>
    <Card.Body >
      <Card.Text >
     <div className='quiz-under-title'> Quiz {quiz.id}</div>
      </Card.Text>
    </Card.Body>
  </Card>
   
  
    );
};

export default QuizButton;