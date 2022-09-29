import { useEffect, useState } from "react";
import Tile from "./Tile";

export default function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  function updateTile(index) {
    if (board[index]) return;
    setBoard((prevBoard) => prevBoard.map((value, i) => (i === index ? currentPlayer : value)));
    setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  }

  return (
    <div className="board">
      {board.map((value, index) => (
        <Tile
          key={index}
          value={value}
          index={index}
          currentPlayer={currentPlayer}
          updateTile={updateTile}
        />
      ))}
    </div>
  );
}
