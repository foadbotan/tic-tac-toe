import useHover from "../hooks/useHover";

export default function Tile({
  value,
  index,
  currentPlayer,
  updateTile,
  gameOver,
  winningCombination,
}) {
  const [ref, isHovered] = useHover();

  const isTilePlayable = isHovered && !gameOver && !value;
  const isWinningTile = winningCombination.includes(index);

  function handleClick() {
    updateTile(index);
  }

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={`tile ${isTilePlayable ? "hover" : ""}`}
      style={{ color: isWinningTile ? "red" : "" }}
    >
      {isTilePlayable ? currentPlayer : value}
    </div>
  );
}
