import useHover from "../hooks/useHover";

export default function Tile({ value, index, currentPlayer, updateTile, gameOver }) {
  const [ref, isHovered] = useHover();

  function handleClick() {
    updateTile(index);
  }

  const isTilePlayable = isHovered && !gameOver && !value;

  return (
    <div ref={ref} onClick={handleClick} className={`tile ${isTilePlayable ? "hover" : ""}`}>
      {isTilePlayable ? currentPlayer : value}
    </div>
  );
}
