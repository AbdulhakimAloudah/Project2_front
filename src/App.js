import Reacr from "react";
import { Route, Routes } from "react-router";
import GameCat from "./components/gameCat";
import GameDog from "./components/gameDog";
import GameApple from "./components/gameApple";
import Login from "./components/login";
import SignUp from "./components/signup";
import Home from "./components/home";
import './App.css'



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cat" element={<GameCat />} />
        <Route exact path="/dog" element={<GameDog />} />
        <Route exact path="/apple" element={<GameApple />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
