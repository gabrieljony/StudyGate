import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contador from '../pages/Contador'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        {/* Rota padrão */}
        <Route path="/" element={<Home />} />

        {/* Outras rotas */}
        <Route path="/about" element={<About />} />

        <Route path="/contador" element={<Contador />} />

        {/* Rota coringa: qualquer caminho não definido entra aqui */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}
