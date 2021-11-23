import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>chuse the game</h1>
      <div>
        <Link to="/cat">
          {" "}
          <button> Find the cat</button>{" "}
        </Link>
        <Link to="/dog">
          {" "}
          <button> Find the doog</button>{" "}
        </Link>

        <Link to="/apple">
          {" "}
          <button> Find the apple</button>{" "}
        </Link>

        <br />
        <Link to="/">
          {" "}
          <button>Sign Up</button>{" "}
        </Link>

        <button>login</button>

        <p>By clicking Sign Up, you agree to our Terms, Data Policy</p>
      </div>
    </div>
  );
};

export default Home;
