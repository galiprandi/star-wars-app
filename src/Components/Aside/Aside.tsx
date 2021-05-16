import React from 'react'
import { useHistory } from 'react-router-dom'

// Styles
import './Aside.css'

// Interfaces
import { iCharacter } from '../Home/Home'
interface iProps {
  character: iCharacter | null
  setCharacter: Function
}

export const Aside: React.FC<iProps> = ({ character, setCharacter }) => {
  const cid = character?.id
  const history = useHistory()

  const handleClickMoreDetails = () => history.push('/character/' + cid)

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
              <p
                title="Show me more about this character"
                onClick={() => handleClickMoreDetails()}
                className="btn"
              >
                all details
                <span className="material-icons">format_list_bulleted</span>
              </p>
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
