import { Link, NavLink } from "react-router-dom";
export const Menu = () => {
  return (
    <>
      <nav className="menu justify-center gap-11 bg-zinc-800 text-white">
        <Link to="/">Home</Link>
        <Link to="/acerca">Acerca</Link>
        <Link to="/contacto">contacto</Link>
        <Link to="/about">About</Link>
        <Link to="/inexistente">error 404</Link>
        <Link to="/productos">Productos</Link>
        <Link to="/randomdata">Random Data</Link>
        <Link to="/servicios">Servicios</Link>
      </nav>
      <nav className="menu justify-center gap-11 bg-zinc-800 text-white">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/acerca"
        >
          Acerca
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : null)}
          to="/contacto"
        >
          contacto
        </NavLink>
      </nav>
    </>
  );
};
