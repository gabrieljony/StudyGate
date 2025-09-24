// src/routes/AppRoutes.jsx

import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import ProtectedRoute from './ProtectedRoute'
import ReduxRoadmap from '../pages/ReduxRoadmap'

export default function AppRoutes() {
  return (
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

        <Route
            path="/redux-roadmap"
            element={
                <ReduxRoadmap />
            }
        />

        {/* Rota coringa */}
        <Route path="*" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      </Routes>
  )
}