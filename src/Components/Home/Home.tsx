import React, { useState } from 'react'

// Styles & Resources
import './Home.css'
import logo from './logo.png'

// Hooks
import { useCharacters } from '../../Hooks/useCharacters'
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
  // const { status, data, currentPage, changePage } = usePeople()
  const { data, isLoading, isSuccess, isError, page, setPage } = useCharacters()

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'left' && data?.next) setPage(data.next)
    if (direction === 'right' && data?.previous) setPage(data.previous)
  }
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
        {
          // On success
          isSuccess &&
            data?.results?.map(item => (
              <Character setCharacter={setCharacter} {...item} key={item.url} />
            ))
        }
        {
          // On success => Pagination
          isSuccess && (
            <>
              <div className="pagination">
                {
                  // On fetching
                  isLoading && <Loading />
                }
                {
                  // On Error
                  isError && <h4>Something's wrong :/</h4>
                }
                {
                  // Previous Button
                  data?.previous && (
                    <button onClick={() => setPage(data.previous!)}>
                      <span className="material-icons">navigate_before</span>
                    </button>
                  )
                }
                {
                  // Page number
                  data?.previous && (
                    <span className="page-number">{page.slice(-1)}</span>
                  )
                }
                {
                  // Next Button
                  data?.next && (
                    <button onClick={() => setPage(data.next!)}>
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
