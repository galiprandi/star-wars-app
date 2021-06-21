import { render, screen, within } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router } from 'react-router-dom'

// Import component !
import { Pagination } from './Pagination'

// Render Component
beforeEach(() =>
  render(
    <Router>
      <QueryClientProvider client={new QueryClient()}>
        <Pagination
          page="/1/"
          setPage={() => {}}
          next="next_page"
          previous={null}
        />
      </QueryClientProvider>
    </Router>
  )
)

describe('<Home />', () => {
  it('should render a next page button', () => {
    const button = screen.getByRole('button', {
      name: /navigate_next/i,
    })

    within(button).getByText(/navigate_next/i)
  })
})
