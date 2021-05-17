import React from 'react'

// Interfaces
interface iProps {
  location: Location
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
      <h2>No page found on</h2>
      <h5>
        <code>{location.pathname}</code>
      </h5>
    </div>
  )
}
