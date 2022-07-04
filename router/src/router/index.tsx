import React from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "../components/layout";
import { Home } from "../pages/Home";
import { SearchResults } from "../pages/SearchResults";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search/:query" element={<SearchResults />} />
      </Route>
    </Routes>
  );
}
