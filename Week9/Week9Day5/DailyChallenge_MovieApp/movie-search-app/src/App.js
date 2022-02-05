// import { Routes, Route } from "react-router-dom";
// components
import SearchPage from './Components/SearchPage';
// styles
import './App.css';

const App = () => {
  return (
    <div className="App">
      <SearchPage />
    </div>

  );
}

export default App;

// https://www.omdbapi.com/?apikey=${APIKey}&s=${text}