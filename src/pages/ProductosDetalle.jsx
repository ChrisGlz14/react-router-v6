import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export const ProductosDetalle = ({ productos }) => {
  function handleGoBack() {
    navigate(-1);
  }

  const navigate = useNavigate();

  const { id } = useParams();

  console.log(useParams());

  const producto = productos.find((productos) => productos.id.toString() === id
  );

  return (
    <section>
      <h1>Detalle del producto</h1>
      <h2>{producto.nombre}</h2>
      <h1>$ {producto.precio}</h1>
      <h4>{producto.id}</h4>
      <button onClick={handleGoBack}>Volver</button>
    </section>
  );
};
