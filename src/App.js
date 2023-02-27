import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header  />

          <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='/quiz' exact element={<Quiz/>} />
            <Route path='/result' exact element={<Result/>} />
            
          </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
