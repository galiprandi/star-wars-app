import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

// Import component !
import { Home } from './Home'

// Render Component
beforeEach(() =>
  render(
    <Router>
      <Home />
    </Router>
  )
)

describe('<Home />', () => {
  it('should render a logo image', async () => {
    screen.getByRole('img', { name: /star wars app/i })
  })

  it('should render a Github link', async () => {
    screen.getByRole('link', { name: /github/i })
  })
})
