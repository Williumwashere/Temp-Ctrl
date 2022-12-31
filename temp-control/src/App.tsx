import React, { useState } from "react";

const App = () => {
  const [temperature, setTemperature] = useState(10);
  const [color, setColor] = useState("cold");

  const increaseTemperature = () => {
    const newTemp = temperature + 1
    setTemperature(newTemp);
  };

  const decreaseTemperature = () => {
    const newTemp = temperature - 1
    setTemperature(newTemp)
  }

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${color}`}>{temperature}°C</div>
      </div>
      <div className="button-container">
        <button onClick={() => decreaseTemperature()}>-</button>
        {}
        <button onClick={() => increaseTemperature()}>+</button>
      </div>
    </div>
  );
};

export default App;
