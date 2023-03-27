import { CircularProgress} from '@mui/material';
import React, { useEffect, useState } from 'react'
import Question from '../Components/Question';

const Quiz = ({name, 
  questions, 
  score, 
  setScore, 
  setQuestions, 
  noofquestions,
  setNoofquestions}) => {

  const[options, setOptions] = useState();
  const[currQues, setCurrQues] = useState(0);

  useEffect(() => {
    // console.log(questions);

    // Taking the correct & incorrect answers of questions
    setOptions(questions && handleShuffle([
      questions[currQues]?.correct_answer,
      ...questions[currQues]?.incorrect_answers
    ])
  );
  }, [questions, currQues]); 
  /* Passing (questions, currQues) questions (bcz we have to roll new question on click)
     currQues (bcz we have to roll new Options on every new question)*/
  // console.log(options);

  // reshuffling the options of the questions 
  const handleShuffle = (Options) => {
    return Options.sort(() => Math.random() -0.5)
  };
  
  return (
    <div className='quiz'>
      <span className='quiz_subtitle'>Welcome, {name}</span>
      
      {questions?(
       <>
        <div className='quizInfo'>
          <span>Category: {questions[currQues].category}</span>
          <span>Score: {score}</span>
        </div>

        {/*Passing all the value to Question Component */}
        <Question
        currQues={currQues}
        setCurrQues={setCurrQues}
        questions={questions}
        options={options}
        correctanswer={questions[currQues]?.correct_answer}
        score={score}
        setScore={setScore}
        setQuestions={setQuestions} 
        noofquestions={noofquestions}
        setNoofquestions={setNoofquestions}
        />
       </> 
      ):(
        <CircularProgress style={{margin: 100}}
        color="success"
        size={150}
        thickness={1}>
        </CircularProgress>
      )}
    </div>
  )
}

export default Quiz