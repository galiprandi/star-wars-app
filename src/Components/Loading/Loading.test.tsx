import { render, screen } from '@testing-library/react'

// Import component
import { Loading as Component } from './Loading'

// Render Component
beforeEach(() => render(<Component />))

describe('<ErrorsMessages />', () => {
  it('should render a info image', () => {
    screen.getByRole('img', { name: /Loading/i })
  })
})
