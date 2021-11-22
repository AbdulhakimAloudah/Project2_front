import React from 'react'
import c from "../.././img/g.jpg"
import a from "../.././img/a.jpeg"
import b from "../.././img/b.png"
import { useState,useEffect } from 'react'


// my Array
export default function Game() {
    let qush = [{img:c, answer:true},{img:a, answer:false},{img:b, answer:true}]



const [cont, setcont] = useState(0)
const [score, setscore] = useState(0)


//butten
const check = (ans,button)=>{
    setscend (7)
    if(ans==button){
    console.log('correct answer');
    setscore ( score + 1) 
    }else {
    console.log('wrong answer');
    }
    setcont(cont + 1 )
}

//timer1
 useEffect(() => {
  const timer = setTimeout(() => {
    console.log('wrong answer')
    setcont(cont + 1 )
  }, 7000);
  return () => clearTimeout(timer);
}, [cont]);



//timer2
const [scend, setscend] = useState(7)
 useEffect(() => {
  const timer = setInterval(() => {
       setscend(scend - 1 )
  }, 1000);
  if (scend <= 0) {
      setscend (7)
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
               <button onClick={()=>{check(qush[cont].answer,true)}}>TRUE</button>
               <button onClick={()=>{check(qush[cont].answer,false)}}>FALSE</button>
              </div>
        </div>
    )
}



