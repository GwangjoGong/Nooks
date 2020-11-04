import axios from 'axios'
import { useEffect, useState } from 'react'

const useAxios = (options, axiosInstance = axios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null
  })

  const [trigger, setTrigger] = useState(0)

  const refetch = () => {
    setState({
      ...state,
      loading: true
    })
    setTrigger(Date.now())
  }

  if (!options.url) return

  useEffect(() => {
    axiosInstance(options)
      .then((response) => {
        setState({
          ...state,
          loading: false,
          response
        })
      })
      .catch((err) => {
        setState({
          ...state,
          loading: false,
          error: err
        })
      })
  }, [trigger])

  return { ...state, refetch }
}

export default useAxios
