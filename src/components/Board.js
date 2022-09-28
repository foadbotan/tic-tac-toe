import { useState } from "react";
import Tile from "./Tile";

export default function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  return (
    <div>
      {board.map((value, index) => (
        <Tile key={index} value={value} />
      ))}
    </div>
  );
}
