import { render, screen } from '@testing-library/react'

// Import component
import { Error404 as Component } from './Error404'

// Render Component
beforeEach(() => render(<Component />))

describe('<Error404 />', () => {
  it('should render a 404 page', () => {
    screen.getByText(/page no found/i)
  })
})
