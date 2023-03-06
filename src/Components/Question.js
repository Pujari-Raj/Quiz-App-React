import { Button } from '@mui/material';
import React, {useState} from 'react';
import ErrorMessage from './ErrorMessage';
import "../Css/style.css";
import { useNavigate } from 'react-router-dom';
import {Modal} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

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
    setNoofquestions,
}) => {

    //states
    const [show, setShow] = useState(false); // state for modal
    const [selected, setSelected] = useState(); //for selectedAnswer

    // if user doesn't select any option , then throw error
    const [error, setError] = useState(false);  // state for error
    const navigate = useNavigate(); //state for navigating

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

    // Displaying Modal on clicking of quit btn
    const handleQuit = () => {
        setShow(true);
    };

    // directing user to the home page on quiting
    const handleClose = () =>{   
        navigate('/');
    }

    //closing modal
    const handleModal = () => {
        setShow(false);
    }

  return (
    <div className="question">
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* I will not close if you click outside me. Don't even try to press
          escape key. */}
           You Want To Quit The Quiz
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" onClick={handleClose} style={{marginRight: 20}}>
            Yes
          </Button>
          <Button variant="outlined" onClick={handleModal}>No</Button>
        </Modal.Footer>
      </Modal>
        <h1>Question: {currQues + 1} / {noofquestions}</h1>

        <div className='singleQuestion'>
            <h2>{questions[currQues].question}</h2>

            {/* Displaying answers of questions */}
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
                    ))
                }
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