//somewhere around 14.53 this is where the video differs from
//the api code snippets
//why do we export them and not put them in Seach.js to begin with?
//nice and clean code?
//organized workspace?idk
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "bdfc7ec0c2392876fc85c7322263eabf";
export const GEO_API_URL =
  "https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000";
export const geoApiOptions = {
  method: "GET",
  headers: {
    //REMEMBER THE API KEY IS PRIVATE
    "x-rapidapi-key": "50dee73084mshb24ed75f33e1357p186612jsn180a3da1277e",
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
