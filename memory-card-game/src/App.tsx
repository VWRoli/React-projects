import { useState } from "react";
//Components
import Game from "./Components/Game";
import Start from "./Components/Start";
//Styles
import "./App.css";

function App() {
  const [gameOn, setGameOn] = useState(false);

  return (
    <div className="App">
      {gameOn ? <Game /> : <Start setGameOn={setGameOn} />}
    </div>
  );
}

export default App;
