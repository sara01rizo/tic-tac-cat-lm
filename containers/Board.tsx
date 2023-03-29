import { useState } from "react";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return <div>Board</div>;
}


export default Board;
