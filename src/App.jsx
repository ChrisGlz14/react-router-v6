import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Acerca } from './pages/Acerca';
import { Contacto } from './pages/Contacto';
import { Menu } from './components/Menu';
import { Error404 } from './components/Error404';
import { Productos } from './pages/Productos';
import { RandomData } from './pages/RandomData';


function App() {

  return (
    <>
    <BrowserRouter>
    
    <Menu />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/acerca' element={<Acerca/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/about' element={<Navigate to="/acerca"/>}/>
        <Route path='/productos' element={<Productos />}/>
        <Route path='/productos/:id' element={<Productos />}/>
        <Route path='/randomdata' element={<RandomData />}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
