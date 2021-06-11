import React, { useState, useEffect, useRef } from "react";

function CountDay() {
  const [count, setCount] = useState(1221);

  useInterval(() => {
    // Your custom logic here
    setCount(count + 121);
  }, 1000);

  return <h1>{count}</h1>;
}
function useInterval(callback, delay) {
  const savedCallback = useRef();
  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
     let id = setInterval(tick, delay);
     return () => clearInterval(id);
    }
  }, [delay]);
}
export default CountDay;