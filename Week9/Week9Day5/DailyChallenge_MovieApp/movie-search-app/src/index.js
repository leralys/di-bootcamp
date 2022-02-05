import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
// import { movieSearchReducer } from './redux/reducers';
import rootReducer from './redux/reducers/rootReducer';

// import reportWebVitals from './reportWebVitals';

// components
import Header from './Components/layout/Header';
import Footer from './Components/layout/Footer';
import MoviePage from './Components/MoviePage';

// const store = createStore(movieSearchReducer, applyMiddleware(thunk, logger));
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/movies/:imdbID" element={<MoviePage />} />
          <Route path="*" element={<main
            style={{ padding: "1rem", minWidth: '100vw', minHeight: '95vh' }}>
            <p>There's nothing here!</p></main>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
