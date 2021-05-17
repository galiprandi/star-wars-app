import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

// Import component
import { Character as Component } from './Character'

// Fake Values
import { iPeopleFakeData } from '../../Testing/fakeData'
const setCharacter = () => {}

// Render Component
beforeEach(() =>
  render(
    <Router>
      <Component {...iPeopleFakeData} setCharacter={setCharacter} />
    </Router>
  )
)

describe('<Character />', () => {
  it('should render a character name', async () => {
    screen.getByRole('heading', { name: /test/i })
  })
})
