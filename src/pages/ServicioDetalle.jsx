import React from "react";
import { useParams} from "react-router-dom";

export const ServicioDetalle = ({ servicios }) => {


  const { id } = useParams();

  console.log(useParams());

  const servicio = servicios.find((servicio) => servicio.id.toString() === id
  );

  return (
    <section>
      <h1>Detalle del Servicio</h1>
      <h2>{servicio.nombre}</h2>
      <h1>$ {servicio.precio}</h1>
      <h4>{servicio.id}</h4>
    </section>
  );
};
