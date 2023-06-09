import React from 'react';

const HealthBar = ({ value, maxValue, label }) => (
  <div className="health-main">
    <div className="health-label">{label}</div>
    <div className="health-max">
      <div
        className="health-value"
        style={{
          width: `${(value / maxValue) * 100}%`,
        }}
      ></div>
    </div>
  </div>
);

export default HealthBar;