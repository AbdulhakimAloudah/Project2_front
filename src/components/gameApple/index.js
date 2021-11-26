import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Home from "../home";
import { Link, useNavigate } from "react-router-dom";

import n1 from "../.././imga/n1.png";
import n2 from "../.././imga/n2.png";
import n3 from "../.././imga/n3.png";
import n4 from "../.././imga/n4.png";
import n5 from "../.././imga/n5.png";
import t1 from "../.././imga/t1.png";
import t2 from "../.././imga/t2.png";
import t3 from "../.././imga/t3.png";
import t4 from "../.././imga/t4.png";
import t5 from "../.././imga/t5.png";

// my Array
export default function Game() {
  let [scend, setscend] = useState(10);

  const navigate = useNavigate();
  let qush = [
    { img: t1, answer: true },
    { img: n1, answer: false },
    { img: t2, answer: true },
    { img: t3, answer: true },
    { img: n2, answer: false },
    { img: t4, answer: true },
    { img: n3, answer: false },
    { img: n4, answer: false },
    { img: n5, answer: false },
    { img: t5, answer: true },
    { img: t5, answer: true },
    { img: t5, answer: true },
    { img: t5, answer: true },
    { img: t5, answer: true },
  ];

  let [cont, setcont] = useState(0);
  const [score, setscore] = useState(0);
let stop = false
  //butten
  const check = (ans, button) => {
    if (cont == 9) {
      stop = true;
      cont=333;
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
  useEffect(() => {
    const timer = setTimeout(() => {
      if (stop!=true) {
      setscend(scend - 1);
      }
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
