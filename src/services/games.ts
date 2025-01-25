import { API_URL } from '@/config/apiUrl'
import { type GameResults } from '@/types'

export async function getGames (
  genre?: string,
  page: number = 1
): Promise<GameResults> {
  const params = new URLSearchParams()

  if (genre != null && genre !== '') {
    params.append('genre', genre)
  }

  if (typeof page === 'number' && page > 0) {
    params.append('page', String(page))
  }

  const formattedUrl = `${API_URL}/games?${params.toString()}`

  const response = await fetch(formattedUrl)
  if (!response.ok) {
    throw new Error('Failed to fetch games')
  }

  return await response.json()
}
