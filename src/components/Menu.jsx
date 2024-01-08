import { Link } from 'react-router-dom';
export const Menu = () => {
  return (
    <nav className='menu'>
      <Link to="/">Home</Link>
      <Link to="/acerca">Acerca</Link>
      <Link to="/contacto">contacto</Link>
    </nav>
  )
}
