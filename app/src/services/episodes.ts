import api from './api'
import { Episode } from '../types/Episode'

export async function getEpisodes(ids: string[]) {
  const episodeIds = ids.map((url) => url.split('/').pop()).join(',')

  const response = await api.get<Episode | Episode[]>(`episode/${episodeIds}`)
  return response.data
}

export async function getEpisodeById(id: string) {
  const response = await api.get<Episode>(`episode/${id}`)
  return response.data
}
