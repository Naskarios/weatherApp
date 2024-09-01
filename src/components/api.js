//somewhere around 14.53 this is where the video differs from
//the api code snippets
//why do we export them and not put them in Seach.js to begin with?
//nice and clean code?
//organized workspace?idk
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "INSERT_API_KEY";
export const GEO_API_URL =
  "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000";
export const geoApiOptions = {
  method: "GET",
  headers: {
    //REMEMBER THE API KEY IS PRIVATE
    "x-rapidapi-key": "INSERT_API_KEY",
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
  },
};

//taken and put into   const loadOptions = async (inputValue) => {
//why? idk scope?
// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
