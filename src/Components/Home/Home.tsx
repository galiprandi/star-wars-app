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
import { Pagination } from '../Pagination/Pagination'

export const Home = () => {
  const { swipe } = useSwipe()
  const [character, setCharacter] = useState<iCharacter | null>(null)
  const { data, isLoading, isSuccess, isError, page, setPage } = useCharacters()

  // Detect user gesture
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
          // On Error
          isError && <h4>Something's wrong :/</h4>
        }
        {
          // On success
          isSuccess &&
            data?.results?.map(item => (
              <Character setCharacter={setCharacter} {...item} key={item.url} />
            ))
        }
        {isSuccess && (
          <Pagination
            page={page}
            setPage={setPage}
            isSuccess={isSuccess}
            next={data?.next}
            previous={data?.previous}
          />
        )}
        {isLoading && <Loading />}
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
