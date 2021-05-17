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

export const CharacterDetails: React.FC = () => {
  const { swipe } = useSwipe()
  const history = useHistory()
  const { id } = useParams<{ id: string }>()
  const { status, details } = useCharacterDetails(id)

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
          // Handle errors
          status === 'error' && (
            <ErrorsMessages
              type="error"
              message="Sorry, some error has occurred and cannot show character details."
            />
          )
        }
        {
          // Loading
          status === 'getting' && <Loading />
        }
        {
          // Render details
          status === 'successful' && details?.name && (
            <>
              <h1>{details?.name} </h1>
              <ul>
                <li>Gender: {details?.gender}</li>
                <li>
                  Height:{' '}
                  {details?.height && +details?.height > 0
                    ? `${+details?.height / 100}m`
                    : details?.height}
                </li>
                <li>Birth: {details?.birth_year}</li>
                <li>Skin Color: {details?.skin_color}</li>
                <li>Eye Colors: {details?.eye_color}</li>
                <li>Hair Color: {details?.hair_color}</li>
                <li>
                  Mass:{' '}
                  {+details?.mass > 0 ? details?.mass + 'kg' : details?.mass}
                </li>
                <li>Films: {details?.films.length}</li>
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
