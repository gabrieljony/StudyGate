import React from 'react'
import AppRoutes from './routes/AppRoutes'

export default function App() {

  return (
    <div>
      {/* Aqui você pode colocar header, menu ou layout fixo */}
      <header style={{ padding: '10px', backgroundColor: '#eee' }}>
        <h1>Meu App React</h1>
      </header>

      {/* Componente que controla todas as rotas */}
      <AppRoutes />

      {/* Footer opcional */}
      <footer style={{ padding: '10px', textAlign: 'center', marginTop: '50px' }}>
        © 2025 Meu App
      </footer>
    </div>
  )
}