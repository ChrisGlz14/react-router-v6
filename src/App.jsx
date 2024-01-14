import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Acerca } from "./pages/Acerca";
import { Contacto } from "./pages/Contacto";
import { Menu } from "./components/Menu";
import { Error404 } from "./components/Error404";
import { Productos } from "./pages/Productos";
import { RandomData } from "./pages/RandomData";
import { ProductosDetalle } from "./pages/ProductosDetalle";
import { useState } from "react";
import { Servicios } from "./pages/Servicios";
import { ServiciosGarantias } from "./pages/ServiciosGarantias";
import { ServiciosLista } from "./pages/ServiciosLista";
import { ServiciosPoliticas } from "./pages/ServiciosPoliticas";
import { ServicioDetalle } from "./pages/ServicioDetalle";

function App() {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "leche",
      precio: "800",
    },
    {
      id: 2,
      nombre: "pan",
      precio: "200",
    },
    {
      id: 3,
      nombre: "huevos",
      precio: "350",
    },
    {
      id: 4,
      nombre: "queso",
      precio: "1200",
    },
    {
      id: 5,
      nombre: "yogur",
      precio: "500",
    },
  ]);

  const [servicios, setServicios ] = useState([
    {
      id: 1,
      servicio: "Lavado de auto",
      precio: "1900",
    },
    {
      id: 2,
      servicio: "Lavado de moto",
      precio: "700",
    },
    {
      id: 3,
      servicio: "Lavado premium",
      precio: "3550",
    },
    {
      id: 4,
      servicio: "Aspirar interiores",
      precio: "1200",
    },
    {
      id: 5,
      servicio: "Lavado de interiores",
      precio: "1500",
    },
  ]);

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/about" element={<Navigate to="/acerca" />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route
            path="/productos/:id"
            element={<ProductosDetalle productos={productos} />}
          />
          <Route
            path="/productos"
            element={<Productos productos={productos} />}
          />
          <Route path="/randomdata" element={<RandomData />} />
          <Route path="*" element={<Error404 />} />





          <Route path="/servicios" element={<Servicios />}>
                  <Route index element={<h2>Este es el home de servicios</h2>} />
                  <Route
                    path="/servicios/garantia" 
                    element={<ServiciosGarantias />}
                  />
                  <Route
                    path="/servicios/lista"
                    element={<ServiciosLista servicios={servicios} />}
                  />
                  <Route
                    path=":id" 
                    element={<>
                    <ServiciosLista servicios={servicios}/>
                    <ServicioDetalle servicios={servicios}/>
                    </>}
                  />
                  <Route
                    path="/servicios/politicas"
                    element={<ServiciosPoliticas />}
                  />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
