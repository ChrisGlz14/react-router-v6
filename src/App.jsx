import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { Acerca } from './pages/Acerca';
import { Contacto } from './pages/Contacto';


function App() {

  return (
    <>

    <BrowserRouter>
    <nav className='menu'>
      <Link to="/">Home</Link>
      <Link to="/acerca">Acerca</Link>
      <Link to="/contacto">contacto</Link>
    </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/acerca' element={<Acerca/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
