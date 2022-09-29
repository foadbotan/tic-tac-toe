import useHover from "../hooks/useHover";

export default function Tile({ value, index, currentPlayer, updateTile }) {
  const [ref, isHovered] = useHover();

  function handleClick() {
    updateTile(index);
  }

  return (
    <div ref={ref} onClick={handleClick} className={`tile ${isHovered && !value ? "hover" : ""}`}>
      {value ? value : isHovered && currentPlayer}
    </div>
  );
}
