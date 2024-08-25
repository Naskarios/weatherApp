import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

import Weather from "./components/weather/Weather";
import Search from "./components/Search";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./components/api";

function App() {
  // the 2 hooks
  //can I turn this into an object?should I?
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

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setCurrentWeatherForecast({
          city: searchData.label,
          ...weatherForecastResponse,
        });
      })
      .catch((err) => console.log(err));
  };
  // logging the response
  console.log("YURRRRR ", currentWeather);
  // 54.08
  return (
    <div className="container">
      <Search onSearchChange={handleonSearchChange}> </Search>{" "}
      {
        //error prevention excecute only if currentWeather exists
      }
      {currentWeather && <Weather data={currentWeather} />}
    </div>
  );
}

export default App;
//https://www.youtube.com/watch?v=Reny0cTTv24
//https://stackoverflow.com/questions/55729132/why-is-my-css-not-applying-to-my-react-components
// the npm install node-sass --save didnt work,remove .scss and the dependency
