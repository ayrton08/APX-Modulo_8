import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSearchResults } from "../hooks";

export function SearchResults() {
  const params = useParams();
  const results = useSearchResults(params.query);

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
