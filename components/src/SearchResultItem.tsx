import React from "react";

export function SearchResultItem({ picture, title, price }) {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{price}</h2>
      <img src={picture} alt="" />
    </div>
  );
}
