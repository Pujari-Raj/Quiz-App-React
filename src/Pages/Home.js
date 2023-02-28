import { Button, MenuItem, TextField } from "@mui/material";
import {useNavigate} from 'react-router-dom'
import React, { useState } from "react";
import "../Css/style.css";
import Categories from "../Data/Categories";
import ErrorMessage from "../Components/ErrorMessage";

const Home = ({ name, setName, fetchQuestions}) => {
  //states
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    }
    else{
      setError(false);
      fetchQuestions(category, difficulty);
      navigate('/quiz');
    }
  }

  return (
    <div className="content">
      <div className="settings">
        <span className="settings_title">Quiz Details</span>

        <div className="settings_select">
          {error && <ErrorMessage>Please Fill All The Details</ErrorMessage>}
          <TextField
            label="Enter Your Name"
            style={{ marginBottom: 30 }}
            variant="outlined"
            onChange={(e) => setName(e.target.value)}/>

          <TextField
            select
            label="Select The Category"
            style={{ marginBottom: 30 }}
            variant="outlined"
            onChange={(e) => setCategory(e.target.value)}
            value={category}>
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Select Difficulty Level"
            style={{ marginBottom: 30 }}
            variant="outlined"
            value={difficulty}
            onChange={(e)=> setDifficulty(e.target.value)}>
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>

          <Button variant="contained" color="primary" size="large"
          onClick={handleSubmit}>
            Start Quiz
          </Button>
        </div>
      </div>

      <img src="./home_banner.svg" alt="banner_img" className="banner" />
    </div>
  );
};

export default Home;
