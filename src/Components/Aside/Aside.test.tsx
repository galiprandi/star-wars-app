import { render, screen, within } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

// Import component
import { Aside as Component } from './Aside'

// Fake Values
import { iCharacterFakeData } from '../../Testing/fakeData'
const setCharacter = () => {}

// Render Component
beforeEach(() =>
  render(
    <Router>
      <Component character={iCharacterFakeData} setCharacter={setCharacter} />
    </Router>
  )
)

describe('<Aside />', () => {
  it('should render a character name', async () => {
    const complementary = screen.getByRole('complementary')
    within(complementary).getByRole('heading', {
      name: /test/i,
    })
  })

  it('should render a link to see more details', async () => {
    screen.getByRole('link', { name: /show me more about this character/i })
  })

  it('should render a link to close aside', async () => {
    screen.getByText(/close/i)
  })
})
