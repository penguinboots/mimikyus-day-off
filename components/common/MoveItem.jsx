import PropTypes from "prop-types";

export default function MoveItem(props) {
  MoveItem.propTypes = {
    id: PropTypes.int,
    moveName: PropTypes.string,
    handleMouseOver: PropTypes.func,
    handleMouseOut: PropTypes.func,
  };

  const { id, moveName, handleMouseOver, handleMouseOut } = props;

  return (
    <div
      className="move-item"
      onMouseOver={() => handleMouseOver(id)}
      onMouseOut={() => handleMouseOut(id)}
    >
      {moveName.toUpperCase()}
    </div>
  );
}
