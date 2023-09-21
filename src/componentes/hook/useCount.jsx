import { useState, useEffect } from "react";

function useCount(initialValue) {
    const [count, setCount] = useState(initialValue);

    useEffect(() => {
        console.log(`El resultado se volvió ${count}`);
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        } else {
            setCount(0);
        }
    }

    return { count, increment, decrement };
}

export default useCount;