import { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import { iResultsAPI } from '../Interfaces/iPeople'

const fetchCharactersPage = async (page: string): Promise<iResultsAPI> =>
  fetch(page).then(res => res.json())

export const useCharacters = () => {
  const queryClient = useQueryClient()
  const [page, setPage] = useState('//swapi.dev/api/people/')

  // Fetching Data
  const query = useQuery<iResultsAPI, Error>(['characters', page], () =>
    fetchCharactersPage(page)
  )

  // Pre Fetching next page if exist
  useEffect(() => {
    const { data } = query
    const preFetchPage = async (page: string) =>
      await queryClient.prefetchQuery(['characters', page], () =>
        fetchCharactersPage(page)
      )
    data?.next && preFetchPage(data.next)
  }, [query, queryClient])

  return {
    setPage,
    page,
    ...query,
  }
}
