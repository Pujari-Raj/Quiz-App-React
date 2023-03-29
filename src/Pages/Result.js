import React, { useEffect,  } from 'react'
import "../Css/style.css";
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@mui/material';

const Result = ({name, score}) => {

  const navigate = useNavigate(); // object of navigate
  const location = useLocation(); // object of location

  useEffect(() => {
    if (!name) {
      navigate('/')
    }
  }, [name, navigate]);

  return (
    <div className='result'> 
      <span className='result_qstn'>Total Number Of Attempted Question: <span className='qstn_bold'>{location.state.noofattemptedqstn}</span> </span>
      <span className='result_qstn'>Total Number Of Not Attempted Question: <span className='qstn_bold'>{location.state.noofnotattemptedqstn}</span> </span> 
      <span className='result_title'>Your Score:<span className='qstn_bold'> {score} / 10 </span> </span> 
          
      <Button
      variant='outlined'
      color='secondary'
      size='large'
      style={{alignSelf: "center", marginTop: 20}}
      href='/'>
        Take Quiz Again
      </Button>
    </div>
  )
}

export default Result