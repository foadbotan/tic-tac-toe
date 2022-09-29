import { useEffect, useState } from "react";
import Tile from "./Tile";

export default function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  return (
    <div className="board">
      {board.map((value, index) => (
        <Tile key={index} value={value} index={index} currentPlayer={currentPlayer} />
      ))}
    </div>
  );
}
