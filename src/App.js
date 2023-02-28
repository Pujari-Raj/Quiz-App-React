import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';

function App() {

  const [name, setName] = useState("");
  const[questions, setQuestions] = useState();
  const[score, setScore] = useState(0);  

  const fetchQuestions = async(category='', difficulty='') => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );

    console.log(data);
    setQuestions(data.results);
  }

  return (
    <BrowserRouter>
      <div className="App">
          <Header  />

          <Routes>
            <Route path='/' exact element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions} />} />
            <Route path='/quiz' exact element={<Quiz/>} />
            <Route path='/result' exact element={<Result/>} />
            
          </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
