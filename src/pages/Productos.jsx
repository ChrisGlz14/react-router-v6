import React from "react";
import { Link } from "react-router-dom";

export const Productos = () => {
  const productos = [
    {
      id: 1,
      nombre: "leche",
      precio: "800",
    },
    {
      id: 2,
      nombre: "pan",
      precio: "200",
    },
    {
      id: 3,
      nombre: "huevos",
      precio: "350",
    },
    {
      id: 4,
      nombre: "queso",
      precio: "1200",
    },
    {
      id: 5,
      nombre: "yogur",
      precio: "500",
    },
  ];

  return (
    <section>
      <h1>Productos</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <Link to={`/productos/${producto.id}`}>{producto.nombre}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
