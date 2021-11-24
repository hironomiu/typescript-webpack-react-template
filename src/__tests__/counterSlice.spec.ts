import counterReducer, { increment } from '../ts/feature/counter/counterSlice'

describe('counterReducer', () => {
  const initialState = {
    value: 3,
    status: 'idle',
  }
  it('initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    })
  })

  it('increment', () => {
    const actual = counterReducer(initialState, increment())
    expect(actual.value).toEqual(4)
  })
})
