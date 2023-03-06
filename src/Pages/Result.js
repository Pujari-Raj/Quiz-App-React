import React, { useEffect } from 'react'
import "../Css/style.css";
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Result = ({name, score}) => {

  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate('/')
    }
  }, [name, navigate]);

  return (
    <div className='result'> 
      <span className='result_title'>Final Score: {score} / 10</span>
      <Button
      variant='outlined'
      color='secondary'
      size='large'
      style={{alignSelf: "center", marginTop: 20}}
      href='/'>
        Go To HomePage
      </Button>
    </div>
  )
}

export default Result