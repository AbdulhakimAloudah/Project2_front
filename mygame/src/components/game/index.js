import React from 'react'
import imgcu from "../.././img/g.jpg"


export default function Game() {
    let qush = [{img:imgcu, answer:true},{img:imgcu, answer:false},{img:imgcu, answer:true}]



const check = (ans,button)=>{
    if(ans==button){
    console.log('correct answer');
    }else{
    console.log('wrong answer');

    }
}

 


    return (
        <div>
           <div>
               <p>1 of 10</p>
               <p>SECONDS: 00</p>
               <p>POINTS 0</p>
          </div>
              
              <img src={qush[0].img} alt="" />
       

              <div>
               <button onClick={()=>{check(qush[0].answer,true)}}>TRUE</button>
               <button onClick={()=>{check(qush[0].answer,false)}}>FALSE</button>
              </div>
        </div>
    )
}



