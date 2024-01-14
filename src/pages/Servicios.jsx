import { Link, Outlet } from "react-router-dom"

export const Servicios = () => {
  return (
    <>
    <h1 className="text-center text-2xl mt-5 bg-slate-400">Servicios</h1>
    <nav className="menu text-center text-2xl mt-5">
    <Link className="text-blue-600 visited:text-purple-600 border-b-2 border-blue-400" to="/servicios">Servicios</Link>
    <Link className="text-blue-600 visited:text-purple-600 border-b-2 border-blue-400" to="/servicios/lista">Lista</Link>
    <Link className="text-blue-600 visited:text-purple-600 border-b-2 border-blue-400" to="/servicios/garantia">Garantia</Link>
    <Link className="text-blue-600 visited:text-purple-600 border-b-2 border-blue-400" to="/servicios/politicas">Politicas de nuestros servicios</Link>
    </nav>
    <Outlet 
    
    />
    
    </>
  )
}
