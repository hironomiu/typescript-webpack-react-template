import React, { VFC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectCount } from './counterSlice'

const Counter: VFC = () => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-row text-xl">
      <button className="text-xl mx-3" onClick={() => dispatch(decrement())}>
        -
      </button>
      <p className="text-xl">{count}</p>
      <button className="text-xl mx-3" onClick={() => dispatch(increment())}>
        +
      </button>
    </div>
  )
}

export default Counter
