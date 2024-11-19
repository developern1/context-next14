'use client'
import { useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

const CounterControls = () => {
  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default CounterControls
