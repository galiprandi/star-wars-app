import { act, render, screen } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom'

// Import component
import { CharacterDetails as Component } from './CharacterDetails'

// Render Component
beforeEach(() =>
  render(
    <Router>
      <QueryClientProvider client={new QueryClient()}>
        <Component />
      </QueryClientProvider>
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
