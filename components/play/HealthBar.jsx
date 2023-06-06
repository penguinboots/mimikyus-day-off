import React from "react";

export default function HealthBar(props) {
  const { value, maxValue, poke, player } = props;

  let adjustedValue = value < 0 ? 0 : value;
  let barWidth = String((adjustedValue / maxValue) * 100);

  let barColor = "#009b00";
  if (barWidth < 15) {
    barColor = "#ec5a45";
  } else if (barWidth < 50) {
    barColor = "#f9b900";
  }

  return (
    <div className="health-container">
      <div className="name-label">
        <div>{poke}</div>
        <div>{player ? `${value}/${maxValue}` : ""}</div>
      </div>
      <div className="health-bar">
        <h4>HP</h4>
        <div className="health-max">
          <div
            className="health-value"
            style={{
              width: `${barWidth}%`,
              backgroundColor: barColor,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
