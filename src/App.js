import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

import Weather from "./components/weather/Weather";
import Search from "./components/Search";
import Forecast from "./components/Forecast";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./components/api";

function App() {
  // the 2 hooks
  //can I turn this into an object?should I?
  //Yes....
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentWeatherForecast, setCurrentWeatherForecast] = useState(null);

  const handleonSearchChange = (searchData) => {
    const [cityId, cityLat, cityLon] = searchData.value.split(" ");

    // fetch requests
    // REMINDER:check API output documentation,the default measurement system is the imperial (wow :(  )
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${cityLat}&lon=${cityLon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const currentWeatherForecastFetch = fetch(
      `${WEATHER_API_URL}forecast?lat=${cityLat}&lon=${cityLon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    // fetch responses
    Promise.all([currentWeatherFetch, currentWeatherForecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const weatherForecastResponse = await response[1].json();

        setCurrentWeather({
          city: searchData.label,
          ...weatherResponse,
        });
        setCurrentWeatherForecast({
          city: searchData.label,
          ...weatherForecastResponse,
        });
      })
      .catch((err) => console.log(err));
  };
  // logging the response
  // console.log("YURRRRR ", currentWeather);
  console.log("YURRRRR ", currentWeatherForecast);
  // 54.08
  return (
    <div className="container">
      <h1> React Weather App </h1>{" "}
      <Search onSearchChange={handleonSearchChange}> </Search>{" "}
      {
        //error prevention excecute only if currentWeather exists
        //it also makes the component pop up when the user gives input
      }{" "}
      {currentWeather && <Weather data={currentWeather} />}{" "}
      {currentWeatherForecast && (
        <Forecast dataFromAPI={currentWeatherForecast} />
      )}{" "}
      {/* <Forecast data={currentWeatherForecast} /> */}{" "}
    </div>
  );
}

export default App;
