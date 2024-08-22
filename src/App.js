import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";

import Weather from "./components/weather/Weather";
import Search from "./components/Search";

function App() {
  const handleonSearchChange = (searchData) => {
    console.log("hi");
  };
  return (
    <div className="container">
      <Search onSearchChange={handleonSearchChange}> </Search>{" "}
      <Weather> </Weather>{" "}
    </div>
  );
}

export default App;
//https://www.youtube.com/watch?v=Reny0cTTv24
//https://stackoverflow.com/questions/55729132/why-is-my-css-not-applying-to-my-react-components
// the npm install node-sass --save didnt work,remove .scss and the dependency
