import { useQuery } from 'react-query'

export const useFilm = (url: string) => {
  return useQuery(['films', url], () => fetch(url).then(res => res.json()))
}
