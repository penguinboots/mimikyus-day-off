import PropTypes from 'prop-types';

export default function MoveDetail(props) {
  MoveDetail.propTypes = {
    moveName: PropTypes.string,
    power: PropTypes.number,
    description: PropTypes.string,
  };

  const { moveName, power, description } = props;

  return (
    <div className="move-detail">
      <h3>{moveName}</h3>
      <p>Power: {power}</p>
      <p>{description}</p>
    </div>
  );
}