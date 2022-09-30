import { useEffect, useState } from "react";
import Tile from "./Tile";

export default function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);

  function updateTile(index) {
    if (board[index] || winner) return;
    setBoard((prevBoard) => prevBoard.map((value, i) => (i === index ? currentPlayer : value)));
    setCurrentPlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  }

  function checkHasWinner() {
    const winningCombinations = [
      // Horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // Vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // Diagonal
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningCombinations.forEach(([a, b, c]) => {
      const combination = board[a] + board[b] + board[c];
      if (combination === "XXX" || combination === "OOO") setWinner(board[a]);
    });
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
  }

  function checkDraw() {
    if (board.every((value) => value !== null) && winner === null) setWinner("draw");
  }

  useEffect(() => {
    checkDraw();
    checkHasWinner();
  }, [board]);

  return (
    <>
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

      {winner && (
        <>
          <h2>{winner === "draw" ? "It's a draw!" : `Player ${winner} wins!`}</h2>
          <button onClick={resetGame}>Play again</button>
        </>
      )}
    </>
  );
}
