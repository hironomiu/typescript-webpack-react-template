import { VFC } from 'react'
import Counter from '../feature/counter/Counter'

const Home: VFC = () => {
  return (
    <div className="flex flex-col items-center">
      <Counter />
    </div>
  )
}

export default Home
