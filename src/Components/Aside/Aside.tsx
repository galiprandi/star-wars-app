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
          <div className="details">
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

              <p title="Height" style={{ textTransform: 'lowercase' }}>
                {character?.height && +character?.height / 100}m
                <span className="material-icons">height</span>
              </p>

              <p title="Birth">
                {character?.birth_year}
                <span className="material-icons">cake</span>
              </p>
            </section>
            <br />
            <section>
              <Link
                to={`${process.env.PUBLIC_URL}/character/${characterID}`}
                title="Show me more about this character"
              >
                all details
                <span className="material-icons">format_list_bulleted</span>
              </Link>
            </section>
          </div>
          <section className="footer">
            <p onClick={() => setCharacter(null)} className="btn">
              close
              <span className="material-icons">navigate_next</span>
            </p>
          </section>
        </div>
      </div>
    </aside>
  )
}
