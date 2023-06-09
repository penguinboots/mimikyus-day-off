import React from "react";

export default function HealthBar(props) {
  const { value, maxValue, poke } = props;

  let adjustedValue = value < 0 ? 0 : value;
  let barWidth = String((adjustedValue / maxValue) * 100);

  let barColor = "#1e9e1e";
  if (barWidth < 15) {
    barColor = "#c30000";
  } else if (barWidth < 35) {
    barColor = "#de6f00da";
  } else if (barWidth < 50) {
    barColor = "#ffe83a";
  }

  return (
    <div className="health-container">
      <div className="name-label">
        {poke}
      </div>
      <div className="health-bar">
        <h4>HP</h4>
        <div className="health-max">
          <div
            className="health-value"
            style={{
              width: `${barWidth}%`,
              backgroundColor: barColor
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
