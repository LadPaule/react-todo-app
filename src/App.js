import React, { useEffect, useState } from "react";

import WeatherCard from "./components/WeatherCard/Component";
import "./App.css";

function App() {
  const [query, setQuery] = useState("Kampala, ug");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    country: null,
    condition: null,
  });

  const getWeather = async q => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=751f342121fda1a53d64f6e59dc1d3ec`
    );
    const resJson = await apiRes.json();
      return resJson;
  };
  //
  const handleSearch = e => {
    e.preventDefault()
    getWeather(query).then(res =>{
      setWeather({
        temp: res.main.temp,
        city: res.name,
        country: res.sys.country,
        condition: res.weather[0].main,
      });
    });
  };

  useEffect(() => {
    getWeather(query).then(res => {
      setWeather({
      temp: res.main.temp,
      city: res.name,
      country: res.sys.country,
      condition: res.weather[0].main,
    });
  });
  },[]);

  return (
    <div className="App">
    
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />

      <form action="">
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
}
export default App;
