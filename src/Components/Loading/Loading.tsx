// Resources
import spinner from './spinner.svg'

export const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <img
        src={spinner}
        alt="Loading..."
        title="Loading..."
        style={{ height: '3em' }}
      />
    </div>
  )
}
