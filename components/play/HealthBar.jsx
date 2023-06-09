import React from "react";

export default function HealthBar (props) {
  const { value, maxValue } = props;

  let adjustedValue = value < 0 ? 0 : value;

  let healthMaxPx = 400;

  let barWidth = String(adjustedValue / maxValue * healthMaxPx);

  return (<div className="health-container">

    <div className="health-label">HP</div>
    <div className="health-max">
      <div
        className="health-value"
        style={{
          width: `${barWidth}px`,
        }}
      ></div>
    </div>

  </div>);
};
