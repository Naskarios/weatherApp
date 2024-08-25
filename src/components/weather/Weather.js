import "./weather.css";

function Weather({ data }) {
  return (
    <div className="weather">
      <div className="top">
        <span>
          {
            //to data einai apo to API RESPONSE JSON OBJECT(the logged response),opote koita to log
            //den einai h akrivhs domh sto Search.js
          }
          <p className="city"> {data.city} </p>{" "}
          <p> {data.weather[0].description} </p>{" "}
        </span>{" "}
        <img
          alt="weatherICON"
          className="weather-icon"
          src={`./icons/${data.weather[0].icon}.png `}
        />{" "}
        {/*Referennces start from the public folder?ig its just for html tags*/}{" "}
      </div>{" "}
      <div className="bottom">
        <p className="temperature"> {Math.round(data.main.temp)} </p>{" "}
        <div className="details">
          <div className="parameter-row">
            {" "}
            <span className="parameter-label top"> details </span>{" "}
          </div>{" "}
          <div className="parameter-row">
            {" "}
            <span className="parameter-label"> Exei peripou </span>{" "}
            <span className="parameter-value">
              {" "}
              {Math.round(data.main.feels_like)} deg{" "}
            </span>{" "}
          </div>{" "}
          <div className="parameter-row">
            {" "}
            <span className="parameter-label"> Wind speed </span>{" "}
            <span className="parameter-value"> {data.wind.speed} m / s ? </span>{" "}
          </div>{" "}
          <div className="parameter-row">
            {" "}
            <span className="parameter-label"> Pressure </span>{" "}
            <span className="parameter-value">
              {" "}
              {Math.round(data.main.pressure)} Pascals{" "}
            </span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default Weather;
