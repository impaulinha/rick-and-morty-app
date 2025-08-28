import api from './api'
import { CharacterResponse } from '../types/CharacterResponse'
import { Character } from '../types/character'

export async function getCharacters(filter?: {
  name?: string
  status?: string
  species?: string
  type?: string
}) {
  const response = await api.get<CharacterResponse>('character', {
    params: filter,
  })
  return response.data
}

export async function getCharacterById(id: string) {
  const response = await api.get<Character>(`character/${id}`)
  return response.data
}
