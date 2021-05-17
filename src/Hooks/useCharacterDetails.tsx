import { useEffect, useState } from 'react'
import axios from 'axios'

// Definitions
import { iPeople } from '../Interfaces/iPeople'
import { iStatus } from '../Interfaces/iStatus'

export const useCharacterDetails = (id: string) => {
  const [status, setStatus] = useState<iStatus>('idle')
  const [details, setDetails] = useState<iPeople | null>(null)

  useEffect(() => {
    const getDetails = async () => {
      const url = 'https://swapi.dev/api/people/' + id
      setStatus('getting')
      try {
        const response = await axios.get(url)
        setDetails(response.data)
        setStatus('successful')
      } catch (error) {
        setStatus('error')
        console.error(error)
      }
    }
    getDetails()
  }, [id])
  return { status, details }
}
