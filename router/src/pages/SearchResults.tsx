import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export function SearchResults() {
  const [results, setResults] = useState([]);
  const params = useParams();

  async function pullResults(q) {
    const res = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${q}`
    );
    const data = await res.json();
    setResults(data.results);
  }
  console.log(results);
  useEffect(() => {
    pullResults(params.query);
  }, [params.query]);

  return (
    <ul>
      {results.map((r) => (
        <li>
          <Link to={"/item/" + r.id}>
            <h2>{r.title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
}
