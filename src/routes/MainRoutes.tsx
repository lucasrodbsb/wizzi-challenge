import React from "react";
import { Routes, Route, Navigate } from "react-router";
import AreaAtuacaoPage from "../pages/PacotesPage";
import CompraFinalizadaPage from "../pages/CompraFinalizadaPage";
import ConfirmarDadosPage from "../pages/ConfirmarDadosPage";
import DetalhesPage from "../pages/DetalhesPage";
import Home from "../pages/Home";


const MainRoutes = () => {

    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/ver-pacotes" element={<AreaAtuacaoPage/>} />
            <Route path="/ver-pacotes/detalhes/:id" element={<DetalhesPage/>}/>
            <Route path="/confirmar-dados/:id" element={<ConfirmarDadosPage/>}/>
            <Route path="/compra-finalizada" element={<CompraFinalizadaPage/>}/>
            <Route path="*" element={<Navigate to='/' replace/>}/>
        </Routes>
    )
}

export default MainRoutes