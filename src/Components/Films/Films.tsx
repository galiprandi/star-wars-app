import { useQuery } from 'react-query'
import { iFilm } from '../../Interfaces/iFilm'

export const Films = ({ url }: { url: string }) => {
  const { data, isLoading } = useQuery<iFilm, Error>(
    ['film', url],
    () => fetch(url).then(res => res.json()),
    { cacheTime: Infinity }
  )
  if (isLoading) return <li>...</li>
  return (
    <li title={`Director: ${data?.director}`}>{`(${data?.release_date.slice(
      0,
      4
    )}) ${data?.title}`}</li>
  )
}
