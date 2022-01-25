import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const LanguageMainPageButtons = ({handleClick}) => {
  

  return (
      <Container>
      <Row>
      <Col>
        <button value="topics" onClick={handleClick}>Topics</button>
       </Col>
       <Col>
        <button value="quiz" onClick={handleClick} >Quizz</button>
      </Col>
      </Row>
      </Container>
  )
};

export default LanguageMainPageButtons;