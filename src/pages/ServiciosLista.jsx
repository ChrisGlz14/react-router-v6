import React from 'react'
import { Link } from 'react-router-dom'

export const ServiciosLista = ({servicios}) => {
  return (
    <>
    <h1>Aqui tiene una lista de nuestros servicios</h1>

    <ul>
        {servicios.map((servicios)=>(
        <li key={servicios.id}>
            <Link to={`/servicios/${servicios.id}`}>{servicios.servicio}</Link>
        </li>
        
        ))}
    </ul>
    </>
  )
}
