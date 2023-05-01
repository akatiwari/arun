 import React from "react";
import { useState } from "react";
 function Counter()
 {
    const [state,setState]=useState(0);
    const increaseCount= ()=>{

        setState((pstate)=>{return pstate+1});
    }
    const decreaseCount = ()=>{
        setState((pstate)=>{return pstate-1})
    }
    const restB =()=>{
        setState(0)
    }

   
    return(
        <div>
            <h2>Counter App</h2>

            <h2>Current Count is {state}</h2>

            <button onClick={increaseCount}>Increase Count</button>
            <button onClick={decreaseCount}>Decrease Count</button>
            <div>
                <button onClick={restB}>Reset</button>
            </div>
            <div>
                <h2> Current No. is {state%2==0 ? "Even" : "Odd"} </h2>
            </div>
        </div>


    )
 }
 export default Counter;