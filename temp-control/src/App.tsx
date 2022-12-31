import React, { useState } from "react";

const App = () => {
  const [temperature, setTemperature] = useState(10);

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className="temperature-display">{temperature}°C</div>
      </div>
      <div className="button-container">
        <button>+</button>
        <button>-</button>
      </div>
    </div>
  );
};

export default App;
