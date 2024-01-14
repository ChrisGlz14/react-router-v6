import React from "react";
import { Link } from "react-router-dom";

export const Productos = ({productos}) => {

  return (
    <section>
      <h1 className="text-center text-2xl mt-5">Productos</h1>
      <ul className="text-center text-2xl mt-5">
        {productos.map((producto) => (
          <li key={producto.id}>
            <Link to={`/productos/${producto.id}`}>{producto.nombre}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
