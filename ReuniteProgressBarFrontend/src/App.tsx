import "./App.css";
import { ProgressBar } from "./ProgressBar";

function App() {
  let value: number = 50;
  let maxValue: number = 100;

  return (
    <div className="RPBContainer">
      <ProgressBar />
    </div>
  );
}

export default App;
