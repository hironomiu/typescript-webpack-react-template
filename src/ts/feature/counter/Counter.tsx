import { VFC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, selectCount } from './counterSlice'

const Counter: VFC = () => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col text-xl mt-10">
      <div className="text-5xl mx-5 px-5">
        <h1>Counter App</h1>
      </div>
      <div className="flex flex-row justify-center my-10">
        <button
          className="text-5xl mx-5 px-5"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <p className="text-5xl">{count}</p>
        <button
          className="text-5xl mx-5 px-5"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  )
}

export default Counter
