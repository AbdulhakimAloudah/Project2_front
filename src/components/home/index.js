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
    <div >
      <h1 className="title">Choose The Game</h1>
      <div className='boxHome'>
        <button className="botHome" onClick={() => nav("/cat")}>
          {" "}
          Find the cat{" "}
        </button>{" "}
        <button className="botHome" onClick={() => nav("/dog")}>
          {" "}
          Find the dog{" "}
        </button>{" "}
        <button className="botHome" onClick={() => nav("/apple")}>
          {" "}
          Find the apple{" "}
        </button>{" "}
        <br />
        <Link to="/signup" className={`${show}`}>
          <button className="btnLog">Sign Up</button>{" "}
        </Link>
        <Link to="/login" className={`${show}`}>
          <button className="btnLog">login</button>{" "}
        </Link>
        <button id="btnLo" onClick={logout} className={`${hide}`}>
          logout
        </button>
      </div>
    </div>
  );
};

export default Home;
