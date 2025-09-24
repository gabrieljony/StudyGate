// src/routes/AppRoutes.jsx

import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Eligibility from '../pages/Eligibility'
import ProtectedRoute from './ProtectedRoute'

export default function AppRoutes() {
  return (
    <Router>
      <Routes>

        {/* Rotas protegidas */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />

        {/* Rota coringa */}
        <Route path="*" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      </Routes>
    </Router>
  )
}