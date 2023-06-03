import React from 'react';

export default function MoveItem({ moveName, power, description }) {
  return (
    <div className="move-item">
      <h3>{moveName}</h3>
      <p>Power: {power}</p>
      <p>{description}</p>
    </div>
  );
}