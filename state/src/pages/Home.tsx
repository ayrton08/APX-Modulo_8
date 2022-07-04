import React, { useState, useEffect, useContext, Suspense } from "react";
import { Link } from "react-router-dom";
import { nameState } from "../atoms";
import { useRecoilValue } from "recoil";
// import { MyContext } from "..";

export function Home() {
  // const data = useContext(MyContext);
  console.log("soy el hook useContext");

  const name = useRecoilValue(nameState);
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((json) => setData(json));
  // }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>Data: {name}</div>
    </Suspense>
  );
}
