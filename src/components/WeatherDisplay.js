import React from "react";

const WeatherDisplay = ({ weather }) => {
  const { temperature, conditions } = weather;
  const tempColor = temperature > 20 ? "red" : "blue";

  return (
    <div>
      <p style={{ color: tempColor }}>Temperature: {temperature}</p>
      <p>Conditions: {conditions}</p>
    </div>
  );
};

export default WeatherDisplay;
