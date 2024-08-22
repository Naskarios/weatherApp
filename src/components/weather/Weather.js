import "./weather.css";

function Weather() {
  return (
    <div className="weather">
      <div className="top">
        <span>
          <p className="city"> City </p> <p> description </p>{" "}
        </span>{" "}
        <img alt="weatherICON" className="weather-icon" src="icons/01d.png" />{" "}
        {/*Referennces start from the public folder?ig its just for html tags*/}{" "}
      </div>{" "}
      <div className="bottom">
        <p className="temperature"> 18 </p>{" "}
        <div className="details">
          <div className="parameter-row">
            {" "}
            <span className="parameter-label top"> details </span>{" "}
          </div>{" "}
          <div className="parameter-row">
            {" "}
            <span className="parameter-label"> Exei peripou </span>{" "}
            <span className="parameter-value"> 22 degs </span>{" "}
          </div>{" "}
          <div className="parameter-row">
            {" "}
            <span className="parameter-label"> Wind speed </span>{" "}
            <span className="parameter-value"> 22 mpofor m / s ? </span>{" "}
          </div>{" "}
          <div className="parameter-row">
            {" "}
            <span className="parameter-label"> Pressure </span>{" "}
            <span className="parameter-value"> 22 Pascals </span>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default Weather;
