import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const Home = () => {
    const navigate = useNavigate();

  const [show, setshow] = useState("");
  const [hide, sethide] = useState("hide");
  useEffect(() => {
    if (localStorage.getItem("User")) {
      sethide("");
      setshow("hide");
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    sethide("hide");
    setshow("");
  //  hhhh  ()
  };

//   const hhhh = ()=>{
//     setshow("hide");
// sethide("");

//   }
  
const nav = (bath)=>{
  if (localStorage.getItem("User")) {
    navigate(bath)
  }else {
    alert("logein first")
  }
}

  return (
    <div>
      <h1>choose the game</h1>
      <div>
          <button onClick={()=>
          nav('/cat')
          }> Find the cat</button>{" "}

        <Link to="/dog">
          <button> Find the dog</button>{" "}
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

        <button onClick={logout} className={`${hide}`}>
          logout
        </button>
        <p>By clicking Sign Up, you agree to our Terms, Data Policy</p>
      </div>
    </div>
  );
};

export default Home;
