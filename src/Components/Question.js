import { Button } from '@mui/material';
import React, {useState} from 'react';
import ErrorMessage from './ErrorMessage';
import "../Css/style.css";
import { useNavigate } from 'react-router-dom';

const Question = ({
    currQues,
    setCurrQues,
    questions,
    options,
    correctanswer,
    score,
    setScore,
    setQuestions,
    noofquestions,
    setNoofquestions
}) => {

    //states
    const [selected, setSelected] = useState(); //for selectedAnswer
    // if user doesn't select any option , then throw error
    const [error, setError] = useState(false); 
    const navigate = useNavigate();

    console.log(noofquestions);

    //function for changing buttons of colors on basis of answer& conditions
    const handleSelect = (i) => {
        if (selected ===i && selected === correctanswer) {
            return "select";   
        }
        else if (selected === i && selected !== correctanswer) {
            return "wrong";
        }
        else if (i === correctanswer) {
            return "select";
        }
    };

    //checking the answer of question
    const handleCheck = (i) => {
        setSelected(i);
        if (i === correctanswer) {
            setScore(score+1);
        }
        setError(false);
    };

    // Function for next question button
    const handleNext = () => {
        if (currQues > 8) {
            navigate('/result');
        }
        else if (selected) {
            setCurrQues(currQues+1);
            setSelected();
        }
        else{
            setError('Please Select Option Before Going to Next Question');
        }
    };

    // When User Quits the Quiz
    const handleQuit = () => {
        setCurrQues(0);
        setQuestions();
        navigate('/');
    };

  return (
    <div className="question">
        <h1>Question {currQues + 1} / {noofquestions}</h1>

        <div className='singleQuestion'>
            <h2>{questions[currQues].question}</h2>

            <div className='options'>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                {options && 
                    options.map((i) => (
                        <button  
                        className={`singleOption ${selected && handleSelect(i)}`}
                        key={i}
                        disabled={selected}
                        onClick={() => handleCheck(i)}>
                            {i}
                        </button>
                    ))}
            </div>
            <div className='controls'>
                <Button
                variant='contained'
                color='secondary'
                size='large'
                style={{width: 185}}
                onClick={handleQuit}>
                    Quit
                </Button>

                <Button
                variant='contained'
                color='primary'
                size='large'
                style={{width: 185}}
                onClick={handleNext}>
                    Next Question
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Question