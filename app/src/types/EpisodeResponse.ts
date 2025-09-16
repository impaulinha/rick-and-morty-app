import { Episode } from './Episode'

export interface EpisodeResponse {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: Episode[]
}
