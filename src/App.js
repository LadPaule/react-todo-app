import React, { useEffect, useState } from "react";

import WeatherCard from "./components/WeatherCard/Component";
import "./App.css";

function App() {
  const location = "Nansana, ug";

  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    country: null,
    condition: null,
  });

  const getWeather = async (q) => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=751f342121fda1a53d64f6e59dc1d3ec`
    );
    const resJson = await apiRes.json();
    setWeather({
      temp: resJson.main.temp,
      city: resJson.name,
      country: resJson.sys.country,
      condition: resJson.weather[0].main,
    });
  };
  //
  const handleSearch = (e) => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

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
