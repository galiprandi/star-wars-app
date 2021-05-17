import React, { useState } from 'react'

// Styles & Resources
import './Home.css'
import logo from './logo.png'

// Hooks
import { usePeople } from '../../Hooks/usePeople'

// Components
import { Character } from '../Character/Character'
import { Aside } from '../Aside/Aside'
import { Loading } from '../Loading/Loading'

// Interfaces
import { iCharacter } from '../../Interfaces/iCharacter'

export const Home: React.FC = () => {
  const [character, setCharacter] = useState<iCharacter | null>(null)
  const { status, data, currentPage, changePage } = usePeople()

  let startPosition = -1
  const handleSwipe = (evt: React.TouchEvent) => {
    const threshold = evt.changedTouches[0].screenX / 4
    const currentPosition = evt.changedTouches[0].clientX
    console.log(evt)
    if (evt.type === 'touchstart') startPosition = currentPosition
    if (evt.type === 'touchend' && currentPosition !== startPosition) {
      const difference = currentPosition - startPosition
      if (difference < threshold) changePage('next')
      if (difference > threshold * -1) changePage('previous')
    }
  }

  return (
    <main
      className="home"
      onTouchStart={evt => handleSwipe(evt)}
      onTouchEnd={evt => handleSwipe(evt)}
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
              <span
                style={{ flexBasis: '100%', opacity: 0.5 }}
                className="material-icons"
                title="Swipe to change the page"
              >
                swipe
              </span>
            </div>
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
