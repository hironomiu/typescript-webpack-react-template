import React, { VFC } from 'react'
import Counter from '../feature/counter/Counter'

const Home: VFC = () => {
  return (
    <div className="flex flex-col items-center">
      <Counter key={1} />
      <Counter key={2} />
      <Counter key={3} />
      <Counter key={4} />
    </div>
  )
}

export default Home
