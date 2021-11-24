import React, { VFC } from 'react'
import { useSelector } from 'react-redux'
import { selectCount } from './counterSlice'

const Counter: VFC = () => {
  const count = useSelector(selectCount)
  return (
    <div>
      <p>{count}</p>
    </div>
  )
}

export default Counter
