import React, { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
// import { MyContext } from "..";
export function Layout() {
  // const data = useContext(MyContext);

  return (
    <div>
      <header>Header</header>
      <Outlet></Outlet>
      <footer>Soy el footer</footer>
    </div>
  );
}
