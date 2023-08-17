import "./App.css";
import { LovePictures } from "./containers/LovePictures";
import { ProgressBar } from "./containers/ProgressBar";
import { WeatherInfo } from "./containers/WeatherInfo";

function App() {
  return (
    <div className="RPBContainer">
      <WeatherInfo />
      <ProgressBar />
      <LovePictures />
    </div>
  );
}

export default App;
