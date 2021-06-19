// Hooks
import { useQuery } from 'react-query'
// Interfaces
import { iPeople } from '../Interfaces/iPeople'

export const useCharacterDetails = (id: string) => {
  return useQuery<iPeople, Error>(['detail', id], () =>
    fetch(`https://swapi.dev/api/people/${id}/`).then(res => res.json())
  )
}
