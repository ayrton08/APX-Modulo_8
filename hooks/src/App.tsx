import React, { useState, useEffect } from "react";

export function App() {
  var [count, setCount] = useState(0);

  function modificarValor() {
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("effect");
  }, [count]);

  return <div onClick={modificarValor}>Counter {count}</div>;
}
