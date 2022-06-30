import React, { useState } from "react";
import { SearchForm } from "./SearchForm";
import { SearchResultItem } from "./SearchResultItem";

export function App() {
  const [results, setResults] = useState([]);
  const handleSearch = async (search) => {
    const res = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
    );
    const data = await res.json();
    setResults(data.results);
  };
  return (
    <div>
      App
      <SearchForm onSearch={handleSearch} />
      {results.map((r) => {
        <SearchResultItem
          title={r.title}
          price={r.price}
          picture={r.thumbnail}
        />;
      })}
    </div>
  );
}
