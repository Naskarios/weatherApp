import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Weather from "./components/Weather";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search> </Search> <Weather> </Weather> <h2> Location </h2>{" "}
        <h3> date </h3> <h1> celsius </h1>{" "}
      </header>{" "}
    </div>
  );
}

export default App;
//https://www.youtube.com/watch?v=Reny0cTTv24
