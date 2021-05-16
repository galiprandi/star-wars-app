import React from 'react'

// Interfaces
import { iPeople } from '../../Interfaces/iPeople'
interface iProps extends iPeople {
  setCharacter: Function
}

export const Character: React.FC<iProps> = ({
  name,
  height,
  birth_year,
  gender,
  url,
  setCharacter,
}) => {
  const id = url.split('/')[5]
  const handleClick = () => {
    setCharacter({
      id,
      name,
      gender,
      height,
      birth_year,
    })
  }

  return (
    <div className="character">
      <h3 onClick={() => handleClick()}>{name}</h3>
    </div>
  )
}
