import React from 'react';

import WeatherCard from './components/WeatherCard/Component';
import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherCard temp={20} />
      <WeatherCard temp={-20} />
      <WeatherCard temp={9} />
      <WeatherCard temp={15} />
    </div>
  );
}

export default App;
