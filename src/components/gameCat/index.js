import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Home from "../home";
import { Link, useNavigate } from "react-router-dom";

import r1 from "../.././img/r1.png";
import r2 from "../.././img/r2.png";
import r3 from "../.././img/r3.png";
import r4 from "../.././img/r4.png";
import t1 from "../.././img/t1.png";
import t2 from "../.././img/t2.png";
import t3 from "../.././img/t3.png";
import t4 from "../.././img/t4.png";
import t5 from "../.././img/t5.png";
import t6 from "../.././img/t6.png";

// my Array
export default function Game() {
  const navigate = useNavigate();
  let qush = [
    { img: t1, answer: true },
    { img: t2, answer: true },
    { img: r1, answer: false },
    { img: t3, answer: true },
    { img: r2, answer: false },
    { img: r3, answer: false },
    { img: t4, answer: true },
    { img: r4, answer: false },
    { img: t5, answer: true },
    { img: t6, answer: true },
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
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
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
    <div>
      <div>
        <p>{cont + 1} of 10</p>
        <p>SECONDS: {scend}</p>
        <p>POINTS {score}</p>
      </div>

      <img src={qush[cont].img} alt="" />

      <div>
        <button
          onClick={() => {
            check(qush[cont].answer, true);
          }}
        >
          YES
        </button>
        <button
          onClick={() => {
            check(qush[cont].answer, false);
          }}
        >
          NO
        </button>
      </div>
    </div>
  );
}
