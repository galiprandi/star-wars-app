import React from 'react'

// Resources
import imgInfo from './robot.png'
import imgError from './dark.png'

// Interfaces
interface iProps {
  type: 'info' | 'error'
  message: string
}

export const ErrorsMessages: React.FC<iProps> = ({ type, message }) => {
  const image = type === 'info' ? imgInfo : imgError

  return (
    <div
      style={{
        textAlign: 'center',
        maxWidth: '70%',
        margin: 'auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <img src={image} alt={type} style={{ textAlign: 'center' }} />
      <p>{message}</p>
      <p>
        <a href={`${process.env.PUBLIC_URL}`}>Back to Home</a>
      </p>
    </div>
  )
}
