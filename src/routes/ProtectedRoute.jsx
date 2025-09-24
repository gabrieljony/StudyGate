import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Eligibility from '../pages/Eligibility'
import { checkEligibility } from '../store/eligibilitySlice'
import LoadingSpinner from '../components/LoadingSpinner'

export default function ProtectedRoute({ children }) {
  const dispatch = useDispatch()
  const { checked, eligible, loading } = useSelector(state => state.eligibility)

  useEffect(() => {
    if (!checked) {
      dispatch(checkEligibility())
    }
  }, [checked, dispatch])

  if (loading || !checked) {  
    return <LoadingSpinner message="Aguarde" />
  }

  if (!eligible) {
    return <Eligibility />
  }

  return children
}
