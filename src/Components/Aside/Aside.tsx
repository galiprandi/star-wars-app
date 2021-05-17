import React from 'react'
import { Link } from 'react-router-dom'

// Styles
import './Aside.css'

// Interfaces
import { iCharacter } from '../../Interfaces/iCharacter'
interface iProps {
  character: iCharacter | null
  setCharacter: Function
}

export const Aside: React.FC<iProps> = ({ character, setCharacter }) => {
  const characterID = character?.id || 1
  return (
    <aside className={`aside ${!!character && 'active'}`}>
      <div className="container-wrap">
        <div className="container">
          <section className="details">
            <h1 className="name">{character?.name}</h1>
            <br />
            <section>
              <p title="Gender">
                {character?.gender}
                <span className="material-icons">
                  {character?.gender !== 'male' &&
                  character?.gender !== 'female'
                    ? 'no_accounts'
                    : character?.gender}
                </span>
              </p>

              <p title="Height">
                {character?.height && +character?.height > 0
                  ? `${+character?.height / 100}m`
                  : character?.height + ''}
                <span className="material-icons">height</span>
              </p>

              <p title="Birth">
                <span>{character?.birth_year}</span>
                <span className="material-icons">cake</span>
              </p>
            </section>
            <br />
            <section>
              <Link
                className="link"
                to={`${process.env.PUBLIC_URL}/character/${characterID}`}
                title="Show me more about this character"
              >
                all details
                <span className="material-icons">format_list_bulleted</span>
              </Link>
            </section>
          </section>
          <section className="footer">
            <p className="link" onClick={() => setCharacter(null)}>
              close
              <span className="material-icons">navigate_next</span>
            </p>
          </section>
        </div>
      </div>
    </aside>
  )
}
