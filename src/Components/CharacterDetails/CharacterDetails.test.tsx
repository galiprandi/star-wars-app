import { act, render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

// Import component
import { CharacterDetails as Component } from './CharacterDetails'

// Render Component
beforeEach(() =>
  render(
    <Router>
      <Component />
    </Router>
  )
)

describe('<CharacterDetails />', () => {
  it('should render a loading image', () => {
    act(() => {
      screen.getByRole('img', { name: /loading/i })
    })
  })
})
