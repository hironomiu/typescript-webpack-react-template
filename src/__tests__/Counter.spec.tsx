import { render, screen } from '@testing-library/react'
import Counter from '../ts/feature/counter/Counter'
import { store } from '../ts/app/store'
import { Provider } from 'react-redux'

describe('feature/counter/Counter', () => {
  it('renders Counter App text', () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    )
    const Element = screen.getByText(/Counter App/i)
    expect(Element).toBeInTheDocument()
  })
})
