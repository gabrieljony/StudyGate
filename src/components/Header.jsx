// src/components/Header.jsx
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={{
      padding: '10px 20px',
      backgroundColor: '#eee',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1>StudyGate</h1>
      <nav>
        <Link
        to="/redux-roadmap"
        style={{
            marginLeft: '20px',
            padding: '6px 12px',
            textDecoration: 'none',
            color: '#fff',
            backgroundColor: '#007bff',
            borderRadius: '6px',
            transition: 'background-color 0.3s',
        }}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '#0056b3'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = '#007bff'}
        >
        Redux Roadmap
        </Link>
      </nav>
    </header>
  )
}
