import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export function Search() {
  const params = useParams();

  useEffect(() => {
    console.log("params", params.busqueda);
  }, [params.busqueda]);

  console.log(params.busqueda);
  return (
    <div>
      Soy el buscador
      <Link to="/">Link a home page</Link>
      <Link to="/search/termo">Link a home page</Link>
    </div>
  );
}
