import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SearchForm } from "../SearchForm";
import css from "./layout.css";

export function Layout() {
  return (
    <div className={css.root}>
      <header>
        <SearchForm />
      </header>
      <Outlet></Outlet>
      <footer>Soy el footer</footer>
    </div>
  );
}
