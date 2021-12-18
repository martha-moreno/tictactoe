import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import 'bootstrap/dist/css/bootstrap.css';
import './Board.css';



ReactDOM.render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

