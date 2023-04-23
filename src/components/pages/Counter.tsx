import { useState } from "react"
import Navigation from "../../Navigation";
import { decrement } from "../../reducers/Actions";
const Counter = (props:any) =>{
     const [counter,descrement,increment,reset] = props;

    return(
        <div>
             <Navigation/>
            <h1>Count is {counter}</h1>
            <button onClick={increment}>Increment by 1</button>
            <button  onClick={decrement}>Decrement by 1</button>
            <button  onClick={reset}>Reset</button>
        </div>
    )
}
export default Counter;
