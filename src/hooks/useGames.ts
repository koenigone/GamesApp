import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platforms {
  id: number
  name: string
  slug: string
}

export interface Games {
    id: number
    name: string
    metacritic: number
    released: string
    background_image: string
    parent_platforms: { platform: Platforms }[]
  }
  
  interface FetchGamesResponse {
    count: number
    results: Games[]
  }

const useGames = ()=> {
    const [games, setGames] = useState<Games[]>([]);
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      const controller = new AbortController()

      setLoading(true)
      apiClient
        .get<FetchGamesResponse>("/games")
        .then((res) => { 
          setGames(res.data.results), setLoading(false)
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message)
          setLoading(false)
        })

        return ()=> controller.abort()
    }, []);

    return {games, error, isLoading}
}

export default useGames;