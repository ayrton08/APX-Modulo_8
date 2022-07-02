import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);
  return <div>Data: {data?.title}</div>;
}
