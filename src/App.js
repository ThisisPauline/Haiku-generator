import "./App.css";
import Generator from "./components/generator";

function App() {
  return (
    <div className="App">
      <h1>Haiku generator</h1>
      <div className="haiku">
        <Generator />
      </div>
    </div>
  );
}

export default App;
