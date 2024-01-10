import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Acerca } from './pages/Acerca';
import { Contacto } from './pages/Contacto';
import { Menu } from './components/Menu';
import './App.css'


function App() {

  return (
    <>
    <BrowserRouter>
    
    <Menu />
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
