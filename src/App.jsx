import AppRoutes from './routes/AppRoutes'
import './App.css'
import Header from './components/Header'

export default function App() {

  return (
    <div className="app-container">
      {/* Aqui você pode colocar header, menu ou layout fixo */}
      <Header />
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