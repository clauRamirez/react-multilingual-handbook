import React, {useState} from 'react';
import QuizButton from './QuizButton';

 const QuizList = ({quizzes}) => {

  const [selectedQuiz, setSelectedQuiz] = useState(null)
  const onQuizClick = (quiz) => {
  setSelectedQuiz(quiz)
}

const quizButtonNodes = quizzes.map((quiz, index) => {
        return <QuizButton key={index} quiz = {quiz} onQuizClick={onQuizClick} />

    })

  return (
    <div>
        {!selectedQuiz ? quizButtonNodes : null}
        {/* {selectedQuiz ? <Quiz quiz={selectedQuiz} /> : null} */}

    </div>
  );
};


export default QuizList;