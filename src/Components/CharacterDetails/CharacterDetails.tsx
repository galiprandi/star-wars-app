import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

// Styles
import './CharacterDetails.css'

// Hooks
import { useCharacterDetails } from '../../Hooks/useCharacterDetails'
import { useSwipe } from '../../Hooks/useSwipe'

// Components
import { Loading } from '../Loading/Loading'
import { ErrorsMessages } from '../ErrorsMessages/ErrorsMessages'
import { Films } from '../Films/Films'

export const CharacterDetails: React.FC = () => {
  const { swipe } = useSwipe()
  const history = useHistory()
  const { id } = useParams<{ id: string }>()
  const { data, isSuccess, isFetching, isError } = useCharacterDetails(id)

  const handleSwipe = (direction: string) => {
    if (direction === 'right') goHome()
  }

  const goHome = () => history.push(`${process.env.PUBLIC_URL}`)

  return (
    <main
      className="character-details"
      onTouchStart={evt => swipe(evt, handleSwipe)}
      onTouchEnd={evt => swipe(evt, handleSwipe)}
    >
      <section className="container">
        {
          // On errors
          isError && (
            <ErrorsMessages
              type="error"
              message="Sorry, some error has occurred and cannot show character details."
            />
          )
        }
        {
          // On loading
          isFetching && <Loading />
        }
        {
          // On Success
          isSuccess && (
            <>
              <h1>{data?.name} </h1>
              <ul>
                <li>Gender: {data?.gender}</li>
                <li>
                  Height:{' '}
                  {data?.height && +data?.height > 0
                    ? `${+data?.height / 100}m`
                    : data?.height}
                </li>
                <li>Birth: {data?.birth_year}</li>
                <li>Skin Color: {data?.skin_color}</li>
                <li>Eye Colors: {data?.eye_color}</li>
                <li>Hair Color: {data?.hair_color}</li>
                {data?.mass && (
                  <li>
                    {`Mass: ${
                      +data?.mass > 0 ? data?.mass + 'kg' : data?.mass
                    }`}
                  </li>
                )}
                <li>
                  Films:
                  <ul>
                    {data?.films.map(url => (
                      <Films url={url} key={url} />
                    ))}
                  </ul>
                </li>
              </ul>

              <button onClick={() => goHome()}>
                <span className="material-icons">navigate_before</span>
                <span>Back</span>
              </button>
            </>
          )
        }
      </section>
    </main>
  )
}
