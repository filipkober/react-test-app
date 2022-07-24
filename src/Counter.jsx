import { useState } from "react";

function Counter() {
    let [count,setCount] = useState(0)
    return(
        <div>
        <button onClick={() => setCount(count+1)}>Count</button>
        <p>Count: {count}</p>
        </div>
    )
}

export default Counter;