import { useState } from "react";
import Square from "../components/Square";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | '0'>(
    Math.round(Math.random() * 1) === 1 ? 'X' : '0'
  );
  const [winner, setWinner] = useState(null);

function reset(){
  setSquares(Array(9).fill(null))
  setWinner(null)
  setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? 'X' : '0')
}

  function setSquareValue(index){
    const newData = squares.map((val, i) =>{
      if(i === index){
        return currentPlayer;
      }
      return val;
    });
    setSquares(newData)
    setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X')
  }

  function getWinner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  }

  return (
    <div>
      <p>Hey {currentPlayer}, it's your turn</p>
      <div className="grid">
        {Array(9)
                .fill(null)
                .map((_, i) => {
                  return (
                    <Square
                      winner={winner}
                      key={i}
                      onClick={() => setSquareValue(i)}
                      value={squares[i]}
                    />
                  );
              })}
      </div>
      <button className="reset" onClick={reset} >RESET</button>
    </div>
  );
}


export default Board;
