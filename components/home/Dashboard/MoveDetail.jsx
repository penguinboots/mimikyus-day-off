import React from 'react';
import PropTypes from 'prop-types';

export default function MoveDetail(props) {

  const { moveName, power, description } = props;

  MoveDetail.propTypes = {
    moveName: PropTypes.string,
    power: PropTypes.number,
    description: PropTypes.string,
  };

  return (
    <div className="move-item">
      <h3>{moveName}</h3>
      <p>Power: {power}</p>
      <p>{description}</p>
    </div>
  );
}