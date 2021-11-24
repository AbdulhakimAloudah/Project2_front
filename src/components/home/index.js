import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const Home = () => {
  const [show, setshow] = useState("");
  const [hide, sethide] = useState("hide");
  useEffect(() => {
    if (localStorage.getItem("User")) {
      sethide("");
      setshow("hide");
    }
  }, []);

  return (
    <div>
      <h1>chuse the game</h1>
      <div>
        <Link to="/cat">
          <button> Find the cat</button>{" "}
        </Link>
        <Link to="/dog">
          <button> Find the doog</button>{" "}
        </Link>
        <Link to="/apple">
          <button> Find the apple</button>{" "}
        </Link>
        <br />
        <Link to="/signup" className={`${show}`}>
          <button>Sign Up</button>{" "}
        </Link>

        <Link to="/login" className={`${show}`}>
          <button>login</button>{" "}
        </Link>
        <button className={`${hide}`}>logout</button>
        <p>By clicking Sign Up, you agree to our Terms, Data Policy</p>
      </div>
    </div>
  );
};

export default Home;
