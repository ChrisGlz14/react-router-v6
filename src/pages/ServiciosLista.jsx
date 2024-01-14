import React from 'react'
import { Link } from 'react-router-dom'

export const ServiciosLista = ({servicios}) => {
  return (
    <>
    <h1 className='text-center text-3xl'>Aqui tiene una lista de nuestros servicios</h1>

    <ul className='text-center text-3xl'>
        {servicios.map((servicios)=>(
        <li key={servicios.id}>
            <Link to={`/servicios/${servicios.id}`}>{servicios.servicio}</Link>
        </li>
        
        ))}
    </ul>
    </>
  )
}
