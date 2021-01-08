import React from "react";

import WeatherEngine from "./components/WeatherEngine";
import "./App.css";


function App() {
  return (
    <div>
      <WeatherEngine location="Kampala,ug" />
      <WeatherEngine location="Kampala,ug" />
    </div>
  );
  
};
export default App;
