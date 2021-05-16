import { render, screen, seq } from '@testing-library/react'

// Import component !
import { Home } from './Home'

// Render Component
beforeEach(() => render(<Home />))

describe('<Home />', () => {
  it('should render a logo image', async () => {
    screen.getByRole('img', { name: /star wars app/i })
  })

  it('should render a Github link', async () => {
    screen.getByRole('link', { name: /github/i })
  })
})
