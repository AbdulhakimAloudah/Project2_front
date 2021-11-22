import Reacr from "react";
import { Route, Routes } from "react-router";
import Game from "./components/game";
import Home from "./components/home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Game />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
