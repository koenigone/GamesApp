import useData from "./useData";

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

const useGames = ()=> useData<Games>('/games')

export default useGames;