import { Link, Outlet } from "react-router-dom"

export const Servicios = () => {
  return (
    <>
    <h1>Servicios</h1>
    <nav className="menu">
    <Link to="/servicios">Servicios</Link>
    <Link to="/servicios/lista">Lista</Link>
    <Link to="/servicios/garantia">Garantia</Link>
    <Link to="/servicios/politicas">Politicas de nuestros servicios</Link>
    </nav>
    <Outlet 
    
    />
    
    </>
  )
}
