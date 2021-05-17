import React from 'react'

// Components
import { ErrorsMessages } from '../ErrorsMessages/ErrorsMessages'

// Interfaces
interface iProps {
  location?: Location
}

export const Error404: React.FC<iProps> = ({ location }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        backgroundColor: 'rgba(255,255,255,0.8)',
      }}
    >
      <ErrorsMessages type="error" message="PAGE NO FOUND" />
      <code>{location?.pathname}</code>
    </div>
  )
}
