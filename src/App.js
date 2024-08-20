import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          name="locationInput"
          placeholder="Search..."
          className="alert alert-primary"
        ></input>
        <h2>Location</h2>
        <h3>date</h3>
        <h1>celsius</h1>
      </header>
    </div>
  );
}

export default App;
