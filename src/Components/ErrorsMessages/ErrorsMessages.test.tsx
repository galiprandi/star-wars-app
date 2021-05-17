import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

// Import component
import { ErrorsMessages as Component } from './ErrorsMessages'

// Render Component
beforeEach(() =>
  render(
    <Router>
      <Component type="info" message="test" />
    </Router>
  )
)

describe('<ErrorsMessages />', () => {
  it('should render a info image', () => {
    screen.getByRole('img', { name: /info/i })
  })

  it('should render a message', () => {
    screen.getByText(/test/i)
  })

  it('should render a Back to home link', () => {
    screen.getByRole('link', { name: /back to home/i })
  })
})
