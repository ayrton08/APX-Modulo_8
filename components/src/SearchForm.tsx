import React from "react";

export function SearchForm({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(e.target.search.value);
    }
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input type="text" name="search" />
      <button>Buscar</button>
    </form>
  );
}
