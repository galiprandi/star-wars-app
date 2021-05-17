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

  return (
    <main className="home">
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
