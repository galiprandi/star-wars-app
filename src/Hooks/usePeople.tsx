import { useEffect, useState } from 'react'
import axios from 'axios'

// Definitions
import { iResultsAPI } from '../Interfaces/iPeople'
import { iStatus } from '../Interfaces/iStatus'

export const usePeople = () => {
  const [status, setStatus] = useState<iStatus>('idle')
  const [data, setData] = useState<iResultsAPI | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getData()
  }, [])

  const getData = async (url = 'https://swapi.dev/api/people/') => {
    try {
      setStatus('getting')
      const response = await axios.get(url)
      setData(response.data)
      setStatus('successful')
    } catch (error) {
      setStatus('error')
      console.error(error)
    }
  }

  const changePage = (page: 'previous' | 'next') => {
    if (page === 'previous' && !!data?.previous) {
      setCurrentPage(prev => prev - 1)
      const secureUrl = data.previous.replace('http', 'https')
      getData(secureUrl)
    }

    if (page === 'next' && !!data?.next) {
      setCurrentPage(prev => prev + 1)
      const secureUrl = data.next.replace('http', 'https')
      getData(secureUrl)
    }
  }

  return {
    status,
    data,
    currentPage,
    changePage,
  }
}
