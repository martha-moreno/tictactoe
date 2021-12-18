import React, {useState} from 'react';
import Square from './Square';
import './Board.css';



const Board = () => {
    // 1st player is X ie 1
    // State keeps track of next player and gameState
    const [player, setPlayer] = React.useState(1);
    const [gameState, setGameState] = React.useState([]);
    
    let status = `Winner is ${checkForWinner(gameState)}`;
    
    

    // Part 1 step 1 code goes here
    // Use conditional logic to set a variable to either 'Player O' or  'Player X'
    let playerTurn = `Next Player: ${player == '0' ? 'Player O' : 'Player X'}`;
  
    console.log(`We hav a winner ${status}`);
  
    const takeTurn = (id) => {
      setGameState([...gameState, { id: id, player: player }]);
      setPlayer((player + 1) % 2); // get next player
      return player;
    };

    function renderSquare(i) {
      // use properties to pass callback function takeTurn to Child
      return <Square takeTurn={takeTurn} id={i}></Square>;
    }
  
    return (
       
      
      <div className="game-board">
      <h1 className="title">TicTacToe</h1>
        <div className="grid-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}  
        </div>
        <div className="grid-row"> 
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="grid-row"> 
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
        <div id="info" className="board-info">
        <h1 id="turn">{playerTurn}</h1>
         <div>{status}</div>
        </div>  
      </div>
    );
  };
  

  // Checking for Winner takes a bit of work
  // Use JavaScript Sets to check players choices
  // against winning combinations
  // Online there is more compact version but I prefer this one
  
  const win = [
    // rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // cols
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  const checkPlayerTurn = (gameState) => {
    return gameState.player;
    
  };
  
  const checkForWinner = (gameState) => {
    // get array of box id's
    // can't be a winner in less than 5 turns
   
    
    if (gameState.length < 5) return 'No winner yet';
    let p0 = gameState.filter((item) => {
      if (item.player == 0) return item;
    });
    p0 = p0.map((item) => item.id);
    let px = gameState.filter((item) => {
      if (item.player == 1) return item;
    });
    px = px.map((item) => item.id);
    if (p0 != null && px != null) {
      var win0 = win.filter((item) => {
        return isSuperset(new Set(p0), new Set(item));
      });
      var winX = win.filter((item) => {
        return isSuperset(new Set(px), new Set(item));
      });
    }
    if (win0.length > 0) return 'Player O ';
    else if (winX.length > 0) return 'Player X ';
    return 'No Winner Yet';
  };

  // check if subset is in the set
  function isSuperset(set, subset) {
    for (let elem of subset) {
      if (!set.has(elem)) {
        return false;
      }
    }
    return true;
  }
 
  export default Board;