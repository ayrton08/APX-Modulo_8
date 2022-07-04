import React, { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import css from "./layout.css";
// import { MyContext } from "..";
console.log(css, " soy los estilos ");
const root = { backgroundColor: "green" };


export function Layout() {
  // const data = useContext(MyContext);
  const [rootStyles, setRootStyles] = useState({ backgroundColor: "green" });
  function clickHandler() {
    setRootStyles({ backgroundColor: "pink" });
  }
  function clickHandler2() {
    setRootStyles({ backgroundColor: "aqua" });
  }
  return (
    <div className={css.root}>
      <header>Header</header>
      <Outlet></Outlet>
      <footer>Soy el footer</footer>
    </div>
  );
}
