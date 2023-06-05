import PropTypes from "prop-types";

export default function MoveItem(props) {
  MoveItem.propTypes = {
    moveName: PropTypes.string,
    handleMouseOver: PropTypes.func,
    handleMouseOut: PropTypes.func,
  };

  const { moveName, handleMouseOver, handleMouseOut } = props;

  return (
    <div
      className="move-item"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {moveName.toUpperCase()}
    </div>
  );
}
