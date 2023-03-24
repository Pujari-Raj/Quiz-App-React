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
    noofquestions,
    // setNoofquestions,
}) => {

    //states
    const [show, setShow] = useState(false); // state for modal
    const [selected, setSelected] = useState(); //for selectedAnswer

    //state for answer notselected & useranswer array
    const[notselected, setNotSelected] = useState(false);
    // creating blank array for useranswer 
    const[useranswer, setUserAnswer] = useState(Array(noofquestions).fill(null));

    // if user doesn't select any option , then throw error
    const [error, setError] = useState(false);  // state for error
    const navigate = useNavigate(); // object for navigating user

    // console.log(noofquestions);

    //function for changing buttons of colors on basis of answer & conditions
    const handleSelect = (i) => {  
        // cdtn for right answer
        if (selected === i && selected === correctanswer) {
            return "select";   
        }
        // cdtn for wrong answer
        else if (selected === i && selected !== correctanswer) {
            return "wrong";
        }
        // cdtn if, user select wrong answer, then Display right answer
        else if (i === correctanswer) {
            return "select";
        }
    };

    //checking the answer of question
    const handleCheck = (i) => {
        setSelected(i);

        //creating new array for user's answer and storing all the answers into it. 
        const newAnswers = [...useranswer];
        newAnswers[currQues] = i;
        setUserAnswer(newAnswers);
        console.log(useranswer);

        //prev
        if (i === correctanswer) {
            setScore(score+1);
        }
    };

    // function for submit btn(submitting quiz)
    const handleSubmit = () => {
        navigate('/result');
        // console.log(useranswer);
    }

    // function for Previous Question
    const handlePrevious= () => {        
        // if user clicks on previous btn
        if (currQues>0) {
            setCurrQues(currQues - 1);
            setSelected(useranswer[currQues - 1]);

            setNotSelected(false);
        }
    }

    // Function for next question button
    const handleNext = () => {
        // if user selects, & then then go to next question
        if (selected) {
            if (currQues < noofquestions - 1) {
            //   console.log('qstn attempted, forwarding to next-qstn', currQues);
              setCurrQues(currQues + 1);
              setSelected(useranswer[currQues + 1]);
            
              setNotSelected(false);
              console.log(useranswer);
            }
        }

        // if user does'nt selects, & then then go to next question
        else{
            // console.log('qstn not-attempted, forwarding to next-qstn', currQues);
            setCurrQues(currQues+1);

            setNotSelected(true);
            console.log(useranswer);
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
        <Modal.Header>
          <Modal.Title>Are You Sure</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           You Want To Quit The Quiz
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained" onClick={handleClose} style={{marginRight: 20}}>
            Yes
          </Button>
          <Button variant="outlined" onClick={handleModal}>No</Button>
        </Modal.Footer>
      </Modal>


        <div className='singleQuestion'>
            <div>
            <h1>Question: {currQues + 1} / {noofquestions}</h1>

            </div>
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
                color='primary'
                size='large'
                disabled={currQues===0}
                onClick={handlePrevious}>
                    Previous Question
                </Button>

                <Button
                variant='contained'
                color='primary'
                size='large'
                disabled={currQues===9}
                onClick={handleNext}>
                    Next Question
                </Button>

                <Button
                variant='contained'
                color='error'
                size='large'
                onClick={handleQuit}>
                    Quit
                </Button>

                <Button
                variant='contained'
                color='success'
                size='large'
                onClick={handleSubmit}>
                   Submit Quiz
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Question