import React from 'react'
import imgcu from "../.././img/g.jpg"
import a from "../.././img/a.jpeg"
import b from "../.././img/b.png"
import { useState } from 'react'

export default function Game() {
    let qush = [{img:imgcu, answer:true},{img:a, answer:false},{img:b, answer:true}]


const [cont, setcont] = useState(0)

const check = (ans,button)=>{
    if(ans==button){
    console.log('correct answer');
    }else{
    console.log('wrong answer');

    }
    setcont(cont + 1 )
}

 


    return (
        <div>
           <div>
               <p>{cont + 1} of 10</p>
               <p>SECONDS: 00</p>
               <p>POINTS 0</p>
          </div>
              
              <img src={qush[cont].img} alt="" />
       

              <div>
               <button onClick={()=>{check(qush[cont].answer,true)}}>TRUE</button>
               <button onClick={()=>{check(qush[cont].answer,false)}}>FALSE</button>
              </div>
        </div>
    )
}



