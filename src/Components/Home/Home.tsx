import React, { useState } from 'react'

// Styles & Resources
import './Home.css'
import logo from './logo.png'

// Hooks
import { usePeople } from '../../Hooks/usePeople'
import { useSwipe } from '../../Hooks/useSwipe'

// Components
import { Character } from '../Character/Character'
import { Aside } from '../Aside/Aside'
import { Loading } from '../Loading/Loading'

// Interfaces
import { iCharacter } from '../../Interfaces/iCharacter'

export const Home: React.FC = () => {
  const { swipe } = useSwipe()
  const [character, setCharacter] = useState<iCharacter | null>(null)
  const { status, data, currentPage, changePage } = usePeople()

  const handleSwipe = (direction: 'left' | 'right') =>
    direction === 'left' ? changePage('next') : changePage('previous')

  return (
    <main
      className="home"
      onTouchStart={evt => swipe(evt, handleSwipe)}
      onTouchEnd={evt => swipe(evt, handleSwipe)}
    >
      <img
        src={logo}
        className="logo"
        alt="Star Wars App"
        title="Star Wars App"
      />
      <div className="container">
        {status === 'getting' ? <Loading /> : undefined}

        {
          // Characters
          status === 'successful' &&
            data?.results &&
            data.results.map(item => (
              <Character setCharacter={setCharacter} {...item} key={item.url} />
            ))
        }
        {
          // Pagination
          status === 'successful' && (
            <>
              <div className="pagination">
                {
                  // Previous Button
                  data?.previous && (
                    <button onClick={() => changePage('previous')}>
                      <span className="material-icons">navigate_before</span>
                    </button>
                  )
                }

                {
                  // Page number
                  data?.previous && (
                    <span className="page-number">{currentPage}</span>
                  )
                }

                {
                  // Next Button
                  data?.next && (
                    <button onClick={() => changePage('next')}>
                      <span className="material-icons">navigate_next</span>
                    </button>
                  )
                }
              </div>
              <span
                className="material-icons swipe"
                title="Swipe to change the page"
              >
                swipe
              </span>
            </>
          )
        }
      </div>
      <footer>
        <a
          href="https://github.com/galiprandi/star-wars-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </footer>
      <Aside character={character} setCharacter={setCharacter} />
    </main>
  )
}
