import React, { useState, useEffect } from "react";

const Counter = ({ targetNumber, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (targetNumber <= 0) return;

    const increment = targetNumber / (duration / 10);
    let currentCount = 0;

    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.round(currentCount));
      }
    }, 10);

    return () => clearInterval(timer);
  }, [targetNumber, duration]);

  return <h1>{count}</h1>;
};

export default Counter;
