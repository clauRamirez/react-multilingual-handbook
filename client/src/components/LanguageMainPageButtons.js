import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


const LanguageMainPageButtons = ({onClickSelect}) => {
  

  const handleClick = (event) => {
    console.log(event.target)
    onClickSelect(event.target.getAttribute('data-value'))
  }
  

  return (
<div className="flex-wrap">

  <Card className='language-card' onClick={handleClick} >
    <Card.Img data-value="topics" variant="top" src="https://images.pexels.com/photos/4778412/pexels-photo-4778412.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
    <Card.Body data-value="topics">
      <Card.Text data-value="topics">
      Topics
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className='language-card' onClick={handleClick} >
    <Card.Img data-value="quiz" variant="top" src="https://images.pexels.com/photos/4778412/pexels-photo-4778412.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
    <Card.Body data-value="quiz">
      <Card.Text data-value="quiz">
      Quizzes
      </Card.Text>
    </Card.Body>
  </Card>

</div>





      // <Container>
      // <Row>
      // <Col>
      //   <button value="topics" onClick={handleClick}>Topics</button>
      //  </Col>
      //  <Col>
      //   <button value="quiz" onClick={handleClick} >Quizz</button>
      // </Col>
      // </Row>
      // </Container>
  )
};

export default LanguageMainPageButtons;