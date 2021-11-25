import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Home from "../home";
import { Link, useNavigate } from "react-router-dom";

import y1 from "../../././imgd/y1.png";
import y2 from "../../././imgd/y2.png";
import n1 from "../../././imgd/n1.png";
import n2 from "../../././imgd/n2.png";
import y3 from "../../././imgd/y3.png";
import n3 from "../../././imgd/n3.png";
import y4 from "../../././imgd/y4.png";
import n4 from "../../././imgd/n4.png";
import n5 from "../../././imgd/n5.png";
import y5 from "../../././imgd/y5.png";

// my Array
export default function Game() {
  const navigate = useNavigate();
  let qush = [
    { img: y1, answer: true },
    { img: y2, answer: true },
    { img: n1, answer: false },
    { img: n2, answer: false },
    { img: y3, answer: true },
    { img: n3, answer: false },
    { img: y4, answer: true },
    { img: n4, answer: false },
    { img: n5, answer: false },
    { img: y5, answer: true },
  ];

  const [cont, setcont] = useState(0);
  const [score, setscore] = useState(0);

  //butten
  const check = (ans, button) => {
    if (cont == 9) {
      Swal.fire({
        title: `yor score is ${score}`,
        // showDenyButton: true,
        showCancelButton: true,
        cancelButtonText: "play again",
        confirmButtonText: "go home",
        // denyButtonText: `Don't save`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate("/");
        } else if (result.isDismissed) {
          window.location.reload();
        }
      });
    } else {
      setscend(10);
      if (ans == button) {
        console.log("correct answer");
        setscore(score + 1);
      } else {
        console.log("wrong answer");
      }
      setcont(cont + 1);
    }
  };

  //timer1
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("wrong answer");
      setcont(cont + 1);
    }, 10000);
    return () => clearTimeout(timer);
  }, [cont]);

  //timer2
  const [scend, setscend] = useState(10);
  useEffect(() => {
    const timer = setInterval(() => {
      setscend(scend - 1);
    }, 1000);
    if (scend <= 0) {
      setscend(10);
    }
    return () => clearTimeout(timer);
  }, [scend]);

  //gamePage
  return (
    <>
      <h1 className="theTitle"> find the apple </h1>
      <div className="container">
        <div className="tit ">
          <div>
            <p> of 10</p>
            <p className="imjcon">{cont + 1} </p>
          </div>
          <hr />
          <div>
            <p>SECONDS</p>
            <p className="secondes"> {scend}</p>
          </div>
          <hr />
          <div>
            <p>POINTS </p>
            <p className="cont">{score}</p>
          </div>
        </div>
        <hr />
        <img className="imgg , tit" src={qush[cont].img} alt="" />

        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
      </div>
      <div className="btnDiv">
        <button
          className="btny"
          onClick={() => {
            check(qush[cont].answer, true);
          }}
        >
          YES
        </button>
        <button
          className="btnn"
          onClick={() => {
            check(qush[cont].answer, false);
          }}
        >
          NO
        </button>
      </div>
    </>
  );
}
