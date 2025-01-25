export interface Game {
  id: string
  genre: string
  image: string
  name: string
  description: string
  price: number
  isNew: boolean
}

export interface GameResults {
  games: Game[]
  totalPages: number
  availableFilters: string[]
  currentPage: number
}
