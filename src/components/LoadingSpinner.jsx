import React from 'react'
import './LoadingSpinner.css' // Vamos criar o CSS para o spinner

export default function LoadingSpinner({ message = 'Aguarde' }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <div className="spinner"></div>
      <div style={{ marginTop: '20px', fontSize: '18px' }}>{message}...</div>
    </div>
  )
}
