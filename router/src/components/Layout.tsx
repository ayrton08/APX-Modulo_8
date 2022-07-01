import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { SearchForm } from "./SearchForm";

export function Layout() {
  return (
    <div>
      <header>
        <SearchForm />
      </header>
      <Outlet></Outlet>
      <footer>Soy el footer</footer>
    </div>
  );
}
