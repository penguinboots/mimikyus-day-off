import PropTypes from "prop-types";

export default function MoveItem(props) {
  MoveItem.propTypes = {
    moveName: PropTypes.string,
  };

  const { moveName } = props;

  return <div className="move-item">{moveName.toUpperCase()}</div>;
}
