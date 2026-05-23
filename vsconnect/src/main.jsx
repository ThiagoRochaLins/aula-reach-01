import React from "react";
import ReactDOM from "react-dom/client";

import Home from "./pages/Home"
import ListaServicos from "./pages/ListaServicos"
import ListaDevs from "./pages/ListaDevs"
import PerfilUsuario from "./page/PerfilUsuario"
import Visualizarservico from "./pages/Visualizarservico"
import CadastroServiço from "./pages/CadastroServiço"
import CadsatroUsuarios from "./pages/CadastroUsuarios"
import CadastroUsuarios from "./pages/CadastroUsuarios"
import Login from "./pages/Login"


import Header from "./components/Header"

import "./index.css"

import { BrowserRouter,Routes,Route } from "react-router-dom";



ReactDOM.createRoot(document.getElementById("Root")).render(

  <React.StrictMode>

    <BrowserRouter>
    
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Lista/Serviços" element={<ListaServiços />} />
        <Route path="Lista/devs" element={<ListaDevs />} />
        <Route path="Visualizar/Servico" element={<Visualizarservico />} />
        <Route path="login/" element={<Login />} />
        <Route path="Cadastro/Usuarios" element={<CadastroUsuarios />} />
        <Route path="Cadastro/Serviço" element={<CadastroServiço />} />
        <Route path="/servico/:idServico" element={<Visualizarservico />} />
        {/* <Route path="/Cadastrar/:Usuario" element={<CadastroUsuario />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);





