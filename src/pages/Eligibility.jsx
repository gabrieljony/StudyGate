// src/pages/Eligibility.jsx

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { checkEligibility } from '../store/eligibilitySlice'
import LoadingSpinner from '../components/LoadingSpinner'

export default function Eligibility() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { checked, eligible, loading } = useSelector(state => state.eligibility)

  useEffect(() => {
    if (!checked) {
      dispatch(checkEligibility())
    } else if (eligible) {
      navigate('/', { replace: true })
    }
  }, [checked, eligible, dispatch, navigate])

  const handleCheckClick = () => {
    dispatch(checkEligibility())
  }
  
  if (loading || !checked) {  
    return <LoadingSpinner message="Aguarde" />
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Verificação de Elegibilidade</h1>
      <p>Confira se você atende aos critérios necessários para prosseguir.</p>
      <button 
        onClick={handleCheckClick} 
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '5px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none'
        }}
      >
        Verificar
      </button>
    </div>
  )
}