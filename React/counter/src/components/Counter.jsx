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


    return(
        <div>
            <h2>Counter App</h2>

            <h2>Current Count is {state}</h2>

            <button onClick={increaseCount}>Increase Count</button>
            <button onClick={decreaseCount}>Decrease Count</button>



        </div>


    )
 }
 export default Counter;