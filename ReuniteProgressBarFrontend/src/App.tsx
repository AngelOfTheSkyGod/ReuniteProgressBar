import "./App.css";
import { ProgressBar } from "./containers/ProgressBar";
import { WeatherInfo } from "./containers/WeatherInfo";

function App() {
  return (
    <div className="RPBContainer">
      <WeatherInfo />
      <ProgressBar />
    </div>
  );
}

export default App;
