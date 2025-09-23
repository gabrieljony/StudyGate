import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './store/counterSlice'

export default function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Contador: {count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
    </div>
  )
}