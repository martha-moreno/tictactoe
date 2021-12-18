import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Board from './Board'
import './Board.css';

const Game = () => {
    return (
       
      <div className="game">
        <Board></Board>
      </div>
     
    );
  };

  export default Game;