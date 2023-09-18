import { useState, useEffect } from "react";

function useCount(initialValue)  { 
    const [count, setCount] = useState(initialValue);

    useEffect(() => {
    console.log("El resultado se volvio ${count}")
    }, [count])
    
    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count + 1){
            count ==0
        }
    }

    return {count, increment, decrement};
  }



export default useCount;