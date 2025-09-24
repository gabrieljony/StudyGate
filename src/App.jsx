import AppRoutes from './routes/AppRoutes'
import './App.css'

export default function App() {

  return (
    <div className="app-container">
      {/* Aqui você pode colocar header, menu ou layout fixo */}
      <header style={{ padding: '10px', backgroundColor: '#eee' }}>
        <h1>StudyGate</h1>
      </header>
      <div className="content">
        {/* Componente que controla todas as rotas */}
        <AppRoutes />
      </div>
      {/* Footer opcional */}
      <footer className="footer">
        © 2025 StudyGate
      </footer>
    </div>
  )
}