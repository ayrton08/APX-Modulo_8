import { useState, useEffect } from "react";
import { atom, useRecoilState, useRecoilValue, selector } from "recoil";

const query = atom({
  key: "query",
  default: "",
});

const resultsState = selector({
  key: "searchResults",
  get: async ({ get }) => {
    const valueQuery = get(query);
    console.log("query", query);
  },
});

export function useSearchResults(query) {
  const [results, setResults] = useState([]);

  async function pullResults() {
    const res = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
    );
    const data = await res.json();
    setResults(data.results);
  }
  console.log(results);
  useEffect(() => {
    if (query) {
      console.log("soy el custom hook");
      pullResults();
    }
  }, [query]);

  return results;
}
